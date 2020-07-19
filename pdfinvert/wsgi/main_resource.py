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
        with open(os.path.join(os.path.dirname(pdfinvert.static.__file__), "index.html"), encoding="utf-8") as f:
            return Response(200, {}, f.read())

    @GET
    @Path("/tile2x2")
    def tile2x2(self):
        with open(os.path.join(os.path.dirname(pdfinvert.static.__file__), "tile2x2", "index.html"),
                  encoding="utf-8") as f:
            return Response(200, {}, f.read())

    @GET
    @Path("/robots.txt")
    def robots(self) -> RenderedView:
        return RenderedView("robots.txt", {})
