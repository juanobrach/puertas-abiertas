angular.module('starter.controllers', [])
.controller('categoryCtrl', function($scope,ActService,$stateParams){
   $scope.categoryName = $stateParams.categoryName;
   $scope.categoryUrl = $stateParams.categoryUrl;
	$scope.items =ActService.getAll();
	$scope.categoriesList = ActService.categorias()

})
.controller('talleresCtrl', function($scope,ActService){
	$scope.talleres =ActService.talleres();	
})
.controller('tallerCtrl',function($scope,ActService,$stateParams){
	$scope.tallerName = $stateParams.tallerName
	$scope.tallerNumber = $stateParams.tallerNumber
	//ADD GMAP
	//first filter only taller selected 
	var taller =$stateParams.tallerName
	var tallerFilter =[];
	mapLocations.filter(function(n){
		if(n.label == taller){
			$scope.map = { center: { latitude: (n.latitude), longitude:n.longitude }, zoom: 17 };
			return tallerFilter.push(n)
		}   
		
	})
	$scope.markers = tallerFilter
	

	
	//LIST ACT. FOR THIS TALLER
	$scope.actividades = ActService.getAll();
     
})
.controller('veladasValientesCtrl',function($scope,ActService){

	$scope.talleres = ActService.veladasValientes()
})
.controller('agendaCtrl',function($scope,ActService){
	//$scope.list = ActService.all();
	//get day
	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	curr_month++;
	var curr_year = d.getFullYear();
	$scope.dateToday = (curr_date + "-" + curr_month);
	
	$scope.list = ActService.getAll()
})


 .controller('MapCtrl',function($scope) {
   $scope.map = { center: { latitude: -34.4721865, longitude:-58.5286196 }, zoom: 14 };
   $scope.markers = mapLocations;
   $scope.windowOptions = {
      visible: false
    };
   $scope.closeClick = function(){
      $scope.windowOptions.visible = false
   }
})

  .controller('busCtrl', function($scope,$location, $anchorScroll) {
   $scope.map = { center: { latitude: -34.4721865, longitude:-58.5286196 }, zoom: 14 };
   $scope.markers = miniBus;
   $scope.salida1 =["jose ingenieros y french","Don bosco 47","Avellaneda y general paz","avellaneda y becco","neuquen y jacinto diaz","diego palma y misiones",
"laprida y becco",
"laprida y chopin"]
   $scope.salida2 =["9 de julio y chacabuco","Acasusso y España","Acasusso y Ayacucho","Estacion Beccar",
"Pavon y 33 orientales"] 
   $scope.goToMap = function(){
      $location.hash('map')
      $anchorScroll()
   }
})

var miniBus =[
	{id:1,latitude:-34.4589966,longitude:-58.5327058,label:"SALIDA parodi y haedo",icon:"./img/iconsMap/bus.png"},//
	{id:2,latitude:-34.4627291,longitude:-58.5309275,label:"jose ingenieros y french"},// 
	{id:3,latitude:-34.4689187,longitude:-58.5184113,label:"Don bosco 47"},//
	{id:4,latitude:-34.4695578,longitude:-58.5238058,label:"Avellaneda y general paz"},//
	{id:5,latitude:-34.4737284,longitude:-58.5234591,label:"avellaneda y becco"},//
	{id:6,latitude:-34.4740769,longitude:-58.5306601,label:"neuquen y jacinto diaz"},//
	{id:7,latitude:-34.4755821,longitude:-58.5262822,label:"diego palma y misiones"},//
	{id:8,latitude:-34.4766449,longitude:-58.522632,label:"laprida y becco"},//
	{id:9,latitude:-34.4735875,longitude:-58.5164482,label:"laprida y chopin"},//
	{id:10,latitude:-34.4714557,longitude:-58.5143104,label:"SALIDA Estacion San Isidro",icon:"./img/iconsMap/bus.png",},//
	{id:11,latitude:-34.468959,longitude:-58.5109442,label:"9 de julio y chacabuco"},// 
	{id:12,latitude:-34.4639306,longitude:-58.5196482,label:"Acasusso y España"},//
	{id:13,latitude:-34.4583005,longitude:-58.523707,label:"Acasusso y Ayacucho"},//
	{id:14,latitude:-34.4609761,longitude:-58.527268,label:"Estacion Beccar	"},//
	{id:15,latitude:-34.4557808,longitude:-58.5281851,label:"Pavon y 33 orientales"},// 	
]

 var mapLocations = [
   	{
   	id:1,
   	latitude: -34.4580213,
   	longitude: -58.5328969,
   	icon:"./img/iconsMap/number_1.png",
   	label:"Atellier Casapuente"
   	},
   	{
   	id:2,
   	latitude: -34.4567377,
   	longitude: -58.5301057,
   	icon:"./img/iconsMap/number_2.png",
   	label:"Nora Aslan"
   	},
   	{
   	id:3,
   	latitude: -34.4557761,
   	longitude: -58.5281755,
   	icon:"./img/iconsMap/number_3.png",
   	label:"Paula Duri"
   	},
   	{
   	id:4,
   	latitude: -34.4634247,
   	longitude: -58.5303729,
   	icon:"./img/iconsMap/number_4.png",
   	label:"Casa Taller de Majo Vidal"
   	},
   	{
   	id:5,
   	latitude: -34.463102,
   	longitude: -58.5294602,
   	icon:"./img/iconsMap/number_5.png",
   	label:"Las Fridas"
   	},
   	{
   	id:6,
   	latitude: -34.4610488,
   	longitude: -58.5271827,
   	icon:"./img/iconsMap/number_6.png",
   	label:"Taller de Acuarela de Kira Mamontoff",
   	dir:"Av. Centenario 1891"
   	},
   	{
   	id:7,
   	latitude: -34.4586817,
   	longitude: -58.5234353,
   	icon:"./img/iconsMap/number_7.png",
   	label:"M. Laura Baylac"
   	},
   	{
   	id:8,
   	latitude: -34.4630185,
   	longitude: -58.5256824,
   	icon:"./img/iconsMap/number_8.png",
   	label:"Casa atelier Espacio Imaginario"
   	},
   	{
   	id:9,
   	latitude:-34.4645361,
   	longitude:-58.5214505,
   	icon:"./img/iconsMap/number_9.png",
   	label:"El Taller de Santiago Heath"
   	},
   	{
   	id:10,
   	latitude: -34.4655737,
   	longitude: -58.5202976,
   	icon:"./img/iconsMap/number_10.png",
   	label:"EL GLOBO ROJO Javiera Carril"
   	},
   	{
   	id:11,
   	latitude: -34.4663278,
   	longitude: -58.5172654,
   	icon:"./img/iconsMap/number_11.png",
   	label:"La Cocina"
   	},
   	{
   	id:12,
   	latitude: -34.4657086,
   	longitude: -58.5158345,
   	icon:"./img/iconsMap/number_12.png",
   	label:"Susana Raddi"
   	},
   	{
   	id:13,
   	latitude: -34.471449,
   	longitude: -58.5236853,
   	icon:"./img/iconsMap/number_13.png",
   	label:"Dirección de Juventud"
   	},
   	{
   	id:14,
   	latitude: -34.4691165,
   	longitude: -58.5154832,
   	icon:"./img/iconsMap/number_14.png",
   	label:"Madame Schablon de Allison Lelawski"
   	},
   	{
   	id:15,
   	latitude:-34.4678565,
   	longitude:-58.5154324,
   	icon:"./img/iconsMap/number_15.png",
   	label:"Mama Lola"
   	},
   	{
   	id:16,
   	latitude: -34.4672798,
   	longitude: -58.5116552,
   	icon:"./img/iconsMap/number_16.png",
   	label:"Ideas Rodantes"
   	},
   	{
   	id:17,
   	latitude: -34.4687141,
   	longitude: -58.5114644,
   	icon:"./img/iconsMap/number_17.png",
   	label:"La Boutique del Libro"
   	},
   	{
   	id:18,
   	latitude:-34.4679642,
   	longitude:-58.5108599,
   	icon:"./img/iconsMap/number_18.png",
   	label:"Honorable Concejo Deliberante"
   	},
   	{
   	id:19,
   	latitude:-34.4688541,
   	longitude:-58.5096549,
   	icon:"./img/iconsMap/number_19.png",
   	label:"Escuela Superior de Bellas Artes Regina Pacis"
   	},
   	{
   	id:20,
   	latitude: -34.4703136,
   	longitude: -58.5048911,
   	icon:"./img/iconsMap/number_20.png",
   	label:"Pablo de Tomaso y Mariana Lacroze"
   	},
   	{
   	id:21,
   	latitude:-34.4706958,
   	longitude:-58.5076385,
   	icon:"./img/iconsMap/number_21.png",
   	label:"Tienda de Costumbres"
   	},
   	{
   	id:22,
   	latitude:-34.4707064,
   	longitude:-58.5080706,
   	icon:"./img/iconsMap/number_22.png",
   	label:"IOLO Café & Market"
   	},
   	{
   	id:23,
   	latitude:-34.4702834,
   	longitude:-58.5083956,
   	icon:"./img/iconsMap/number_23.png",
   	label:"Honoré Casa de Arte"
   	},
   	{
   	id:24,
   	latitude:-34.4700209,
   	longitude:-58.5089135,
   	icon:"./img/iconsMap/number_24.png",
   	label:"Hilda D Aiello"
   	},
   	{
   	id:25,
   	latitude:-34.4707403,
   	longitude:-58.5103301,
   	icon:"./img/iconsMap/number_25.png",
   	label:"Colegio de Abogados de San Isidro"
   	},
   	{
   	id:26,
   	latitude:-34.4719621,
   	longitude:-58.5113937,
   	icon:"./img/iconsMap/number_26.png",
   	label:"Paisaje Interior de Julia Valente"
   	},
   	{
   	id:27,
   	latitude:-34.4736515,
   	longitude:-58.5130094,
   	icon:"./img/iconsMap/number_27.png",
   	label:"Casa de Cultura San Isidro Centro"
   	},
   	{
   	id:28,
   	latitude:-34.4737622,
   	longitude:-58.5130955,
   	icon:"./img/iconsMap/number_28.png",
   	label:"Cámara de Industrias de San Isidro"
   	},
   	{
   	id:29,
   	latitude:-34.4720272,
   	longitude:-58.5154547,
   	icon:"./img/iconsMap/number_29.png",
   	label:"Casa taller Eugenia Mendoza"
   	},
   	{
   	id:30,
   	latitude:-34.4735774,
   	longitude:-58.5139838,
   	icon:"./img/iconsMap/number_30.png",
   	label:"Nora Corradetti"
   	},
   	{
   	id:31,
   	latitude:-34.4740286,
   	longitude:-58.5149642,
   	icon:"./img/iconsMap/number_31.png",
   	label:"artenlacalle de Silvia Carrasco Obispo"
   	},
   	{
   	id:32,
   	latitude:-34.4752169,
   	longitude:-58.5167708,
   	icon:"./img/iconsMap/number_32.png",
   	label:"Jacqueline Cartier"
   	},
   	{
   	id:33,
   	latitude: -34.4708162,
   	longitude:-58.5222998,
   	icon:"./img/iconsMap/number_33.png",
   	label:"Bosco Bosch"
   	},
   	{
   	id:34,
   	latitude:-34.4713185,
   	longitude:-58.522566,
   	icon:"./img/iconsMap/number_34.png",
   	label:"La Casa del Arte, de Guillermina Arias"
   	
   	},
   	{
   	id:35,
   	latitude: -34.4684263,
   	longitude:-58.5246191,
   	icon:"./img/iconsMap/number_35.png",
   	label:"Carola Zech"
   	},
   	{
   	id:36,
   	latitude:-34.4705335,
   	longitude:-58.525808,
   	icon:"./img/iconsMap/number_36.png",
   	label:"El boliche"
   	},
   	{
   	id:37,
   	latitude:-34.471272,
   	longitude:-58.527323,
   	icon:"./img/iconsMap/number_37.png",
   	label:"El Taller del Pez Globo"
   	},
   	{
   	id:38,
   	latitude:-34.475507,
   	longitude:-58.5334405,
   	icon:"./img/iconsMap/number_38.png",
   	label:"Rebeca Mendoza"
   	},
   	{
   	id:39,
   	latitude:-34.4754923,
   	longitude:-58.5257975,
   	icon:"./img/iconsMap/number_39.png",
   	label:"María Iturralde",
   	},
   	{
   	id:40,
   	latitude:-34.4766632,
   	longitude:-58.5264589,
   	icon:"./img/iconsMap/number_40.png",
   	label:"AMBOS MUNDOS"
   	},
   	{
   	id:41,
   	latitude:-34.4768423,
   	longitude:-58.524898,
   	icon:"./img/iconsMap/number_41.png",
   	label:"La Ronda"
   	},
   	{
   	id:42,
   	latitude:-34.4804712,
   	longitude:-58.5246081,
   	icon:"./img/iconsMap/number_42.png",
   	label:"El taller de Inés Rey"
   	},
   	{
   	id:43,
   	latitude:-34.4782138,
   	longitude:-58.527279,
   	icon:"./img/iconsMap/number_43.png",
   	label:"Federico Hurtado"
   	},
   	{
   	id:44,
   	latitude:-34.4783825,
   	longitude:-58.5296793,
   	icon:"./img/iconsMap/number_44.png",
   	label:"Lic Vivi Grotewold"
   	},
   	{
   	id:45,
   	latitude:-34.4784005,
   	longitude:-58.5064459,
   	icon:"./img/iconsMap/number_45.png",
   	label:"Casa taller Manzone"
   	},
   	{
   	id:46,
   	latitude:-34.4708706,
   	longitude:-58.5484612,
   	icon:"./img/iconsMap/number_46.png",
   	label:"Crear Vale la Pena",
   	},
   	{
   	 id:47,
     latitude:-34.4589966,
	 longitude:-58.5327058,
	 icon:"./img/iconsMap/bus.png",
	 label:"SALIDA: Parodi y Haedo"},
      {
       id:48,
     latitude:-34.472734,
    longitude:-58.5095461,
    icon:"./img/iconsMap/number_47.png",
    label:"Roque Saenz Peña"
       }


   	]
