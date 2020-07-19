import logging
import os
from typing import Type, List, Union

from jivago.config.production_jivago_context import ProductionJivagoContext
from jivago.config.router.router_builder import RouterBuilder
from jivago.jivago_application import JivagoApplication
from jivago.lang.annotations import Override
from jivago.wsgi.filter.filter import Filter
from jivago.wsgi.routing.routing_rule import RoutingRule
from jivago.wsgi.routing.serving.static_file_routing_table import StaticFileRoutingTable

import pdfinvert.wsgi
import pdfinvert.static
from pdfinvert.wsgi.filter.request_metrics_filter import RequestMetricsFilter
from pdfinvert.wsgi.filter.temporary_file_cleanup_filter import TemporaryFileCleanupFilter


class InvertPdfContext(ProductionJivagoContext):
    LOGGER = logging.getLogger("InvertPdfContext")

    def create_router_config(self) -> RouterBuilder:
        return super().create_router_config().add_rule(
            RoutingRule("", StaticFileRoutingTable(
                os.path.dirname(pdfinvert.static.__file__),
                [".js", ".html", ".css", ".json", ".webmanifest"])))

    @Override
    def get_default_filters(self) -> List[Union[Filter, Type[Filter]]]:
        filters = super().get_default_filters()

        prometheus_endpoint = os.environ.get("PROMETHEUS_GATEWAY_ENDPOINT")
        if prometheus_endpoint:
            InvertPdfContext.LOGGER.info(f"Using prometheus pushgateway endpoint {prometheus_endpoint}")
            filters = [RequestMetricsFilter] + filters

        return filters + [TemporaryFileCleanupFilter]


logging.getLogger().setLevel(logging.INFO)

application = JivagoApplication(pdfinvert.wsgi, context=InvertPdfContext)

if __name__ == '__main__':
    port = int(os.getenv("PORT", 8080))

    application.run_dev(port=port, host="0.0.0.0")
