function ListaComprasController($scope) {
    
    // Verifica se tem uma lista armazenada
    if (localStorage["itensArmazenados"]){

        // Retorna a lista em formato array
        var lista = JSON.parse(localStorage["itensArmazenados"]);

    }else{


        // Se não recebe um array vazio
        var lista = [];

    }

    // Armazeno no local storage
    localStorage["itensArmazenados"] = JSON.stringify(lista);

    // Associo o array a uma "variavel" do angular
   $scope.itens = lista;
 
    // Adiciona itens no array
    $scope.adicionaItem = function () {

        // Adiciona no array do angular
        $scope.itens.push({produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});

        // Não entendi
        // $scope.item.produto = $scope.item.quantidade = '';

        // Adiciona no array do localstorage
        localStorage["itensArmazenados"] = angular.toJson($scope.itens);

    };

    // Remove itens do array
    $scope.removerItem = function(index){
        
        // Remove do array do angular
        $scope.itens.splice(index, 1);

        // Armazena denovo
        localStorage["itensArmazenados"] = angular.toJson($scope.itens);

    }
}