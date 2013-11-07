function ListaComprasController($scope) {
    
    // Array inicial
   $scope.itens = [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Pão', quantidade: 10, comprado: false},
        {produto: 'Frango', quantidade: 3, comprado: false},
        {produto: 'Linguiça', quantidade: 2, comprado: false},
        {produto: 'Sal grosso', quantidade: 1, comprado: false}
    ];
 
    // Adiciona itens no array
    $scope.adicionaItem = function () {
        $scope.itens.push({produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
    };

    // Remove
    $scope.removerItem = function(index){
        $scope.itens.splice(index, 1);
    }
}