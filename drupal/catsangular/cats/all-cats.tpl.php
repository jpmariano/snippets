<div id="cats-app" ng-controller="catsController" ng-cloak>
  <div class="cat" ng-repeat="cat in cats">
    <h2>{{cat.node.title}}</h2>
    <div class="body">
      {{cat.node.body}}
    </div>
    <div class="image">
      <img src="{{cat.node.image.src}}">
    </div>
  </div>

    <div class="pagination-centered">
    <!-- See cats.gen.js how the controllers configures the pagination -->
      <pagination total-items="totalItems" ng-model="currentPage" items-per-page="itemsPerPage" ng-change="pageChanged(currentPage)"></pagination>
    </div>
</div>
