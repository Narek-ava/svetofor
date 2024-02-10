<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    <link href="{{ asset('dist/app.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Styles -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="antialiased">
<div class="wrapper">
    <div class="circle">
    </div>
    <div class="circle">
    </div>
    <div class="circle">
    </div>
    <br>
</div>
<button id="start" type="button" class="btn btn-success m-5" >Вперед</button>

<br>
<br>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
<table class="table table-bordered table-striped mb-0">
    <thead>
    <tr>
        <th scope="col">Log</th>
        <th scope="col">position</th>
    </tr>
    </thead>
    <tbody id="table" class="table">
    </tbody>
</table>
</div>
</body>
<script>
    @vite('resources/js/svetofor.js')
</script>
</html>
