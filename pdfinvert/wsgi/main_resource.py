import os
from jivago.templating.rendered_view import RenderedView
from jivago.wsgi.annotations import Resource, Path
from jivago.wsgi.methods import GET
from jivago.wsgi.request.response import Response

import pdfinvert.static


@Resource("/")
class MainResource(object):

    @GET
    def main(self) -> Response:
        with open(os.path.join(os.path.dirname(pdfinvert.static.__file__), "index.html")) as f:
            return Response(200, {}, f.read())

    @GET
    @Path("/robots.txt")
    def robots(self) -> RenderedView:
        return RenderedView("robots.txt", {})
