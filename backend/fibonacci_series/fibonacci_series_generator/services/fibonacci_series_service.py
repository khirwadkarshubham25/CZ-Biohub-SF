import traceback

from rest_framework import status

from fibonacci_series_generator.models.fibonacci_series_model import FibonacciSeries


class FibonacciSeriesService:
    def __init__(self):
        pass

    def get_data(self, *args, **kwargs):
        try:
            number = kwargs['request'].query_params.get('number')
            if int(number) < 1 or not number:
                return {"message": "Invalid input provided. Please provide a valid integer."}, status.HTTP_400_BAD_REQUEST
            return {
                'data': self.get_fibonacci_series(int(number))
            }, status.HTTP_200_OK
        except:
            traceback.print_exc()
            return {"message": "Invalid input provided. Please provide a valid integer."}, status.HTTP_400_BAD_REQUEST

    @staticmethod
    def get_fibonacci_series(n):
        result = FibonacciSeries.objects.filter(number=n)

        if result.exists():
            if n == result[0].number:
                return result[0].series

        data = ['0', '1']
        for i in range(2, n):
            data.append(str(int(data[-1]) + int(data[-2])))

        data = ', '.join(data)
        FibonacciSeries.objects.create(number=n, series=data)
        return data

