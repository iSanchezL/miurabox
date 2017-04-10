var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	$scope.persons = []; // array  donde se almacenan los objectos personas
	$scope.add ={}; // objecto donde se almacenara los atributos personales de una persona 
	$scope.addCars = {}; // objecto donde se almacenaran los autos registrados a una personas
	$scope.personCar = null;
	$scope.personEdit = null;
	$scope.detailPerson = {};
	$scope.carEdit = null;
	$scope.detailCar = {};

	$scope.personSelected = null; // scope correspodiente a la seleccion de una persona en la tabla 1
	$scope.personSelectedDos = null;  // scope correspodiente a la seleccion de una persona en la tabla 2
	$scope.carSelected = null;  // scope correspodiente a la seleccion de un auto de persona en la tabla autos
	
    $scope.setSelected = function(personSelected) {
       $scope.personSelected = personSelected;
    }

    $scope.editPersona = function(id_person) {
       $scope.personEdit = id_person;
        $scope.detailPerson = $scope.persons[id_person];
    }

    $scope.editarPersona = function(editPersona)
    {
   
    	$scope.persons[editPersona] = _.extend($scope.persons[editPersona], $scope.detailPerson);
    	$scope.detailPerson = {};
    	$scope.personEdit = null;
    }

    $scope.setSelectedCar = function(carSelected){
    	$scope.carSelected = carSelected;

       console.log(carSelected);
    }

    $scope.addCar = function(id_person) {
       $scope.personCar = id_person;
       $scope.detailPerson = $scope.persons[id_person];
    }

    $scope.guardarAuto = function(personCar) {
    	if(_.has($scope.persons[personCar], "cars"))
    	{
    	$scope.persons[personCar].cars.push($scope.addCars); // se agrega el nuevo carro 
    	}
    	else{
    	$scope.persons[personCar].cars = [$scope.addCars]; // se agrega el nuevo carro 
	
    	}
      	$scope.addCars = {};
      	$scope.personCar = null;
    }

    $scope.showCars = function(personSelectedDos)
    {
    	$scope.personSelectedDos = personSelectedDos;
    	$scope.detailPersonDos = $scope.persons[personSelectedDos];
       	$scope.personCars = $scope.persons[personSelectedDos].cars;
    }
    $scope.deleteCar = function(id_person, car)
    {   	 
    	var remove = $scope.persons[id_person].cars; 
		remove.splice(car,1);
    }
     $scope.editCar = function(id_person, car)
    {
    	$scope.personEdit = id_person;
    	$scope.carEdit = car;
    	$scope.detailCar = $scope.persons[id_person].cars[car];
    }

    $scope.editarCarro = function(id_person, car)
    {
    	$scope.persons[id_person].cars[car] = $scope.detailCar;
    	$scope.personEdit = null;
    	$scope.carEdit = null;
    	$scope.detailCar = {};
    }


	var incial_persona ={
			nombre: 'Ivan',
			apellido_p: 'Sanchez',
			apellido_m: 'Lopez',
			fecha_nacimiento: '21/12/1991',
			cars: [
					{
						marca: 'Mazda',
						modelo: 'cx-3',
						anio: 2016,
						color: 'Rojo'
					},
					{
						marca: 'Mitsubishi',
						modelo: 'Lancer',
						anio: 2015,
						color: 'Blanco'
					}
				]
		};  // se crea el json object de primer registro persona con sus atributos


	$scope.persons.push(incial_persona); // se agrega el objecto inicial_persona al array

	$scope.guardar = function() {
		//$scope.add.fecha_nacimiento = moment($scope.add.fecha_nacimiento).format("L"); // se formatea la fecha
		$scope.persons.push($scope.add); // se agrega el nuevo json object al array
		$scope.add ={};
	};

  
    

});