from django.http import JsonResponse
from rest_framework import generics, status

from fibonacci_series_generator.services.fibonacci_series_service import FibonacciSeriesService


class FibonacciSeries(generics.ListAPIView):

    def get(self, request, *args, **kwargs):
        kwargs.update({
            'request': self.request
        })
        data, status_code = FibonacciSeriesService().get_data(*args, **kwargs)
        return JsonResponse(data, safe=False, status=status_code)
