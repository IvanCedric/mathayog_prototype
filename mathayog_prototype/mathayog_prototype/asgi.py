"""
ASGI config for mathayog_prototype project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

from channels.auth  import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter
from channels.routing import URLRouter

from polls.routing import ws_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mathayog_prototype.settings')

application = ProtocolTypeRouter({
    'http' : get_asgi_application(),
    'websocket': AuthMiddlewareStack(URLRouter(ws_urlpatterns))
})

#application = get_asgi_application()
