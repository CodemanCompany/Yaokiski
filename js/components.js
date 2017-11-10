app.component( 'contact', {
	"controller":	[ '$scope', 'request', 'validation', function( $scope, request, validation ) {
		$scope.loading = false;
		$scope.validation = validation;

		$scope.action = function() {
			if( $scope.form.$invalid ) {
				$scope.form.email.$pristine = false;
				$scope.form.message.$pristine = false;
				$scope.form.name.$pristine = false;
				$scope.form.subject.$pristine = false;
				$scope.form.tel.$pristine = false;
				return;
			}	// end if

			$scope.input[ 'g-recaptcha-response' ] = angular.element( '#g-recaptcha-response' ).val();
			if( ! $scope.input[ 'g-recaptcha-response' ] ) {
				$scope.recaptcha = true;
				return;
			}	// end if

			$scope.loading = true;

			// request.post( '', $scope.input )
			// .then( function( response ) {
			// 	if( request.check( response ) ) {
					
			// 	}	// end if
			// 	$scope.reset();
			// }, function( error ) {} );
		};

		$scope.reset = function() {
			$scope.loading = false;
			$scope.recaptcha = false;
			grecaptcha.reset();
			$scope.form.$setPristine();
			$scope.input = {};
		};
	} ],
	"templateUrl":	'/component/contact.html',
} );

.component( 'login', {
	"controller":	[ '$scope', 'request', 'storage', 'validation' function( $scope, request, storage, validation ) {
		$scope.input = {};
		$scope.loading = false;
		$scope.validation = validation;

		console.log( storage.getData( 'name' ) );

		$scope.action = function() {
			if( $scope.form.$invalid ) {
				$scope.form.user.$pristine = false;
				$scope.form.password.$pristine = false;
				return;
			}	// end if

			$scope.reset();

			// if( input.remember  )

			$scope.loading = true;

			// request.post( '', $scope.input )
			// .then( function( response ) {
			// 	if( request.check( response ) ) {
					
			// 	}	// end if
			// 	$scope.reset();
			// }, function( error ) {} );
		};

		$scope.reset = function() {
			$scope.loading = false;
			$scope.form.$setPristine();
			$scope.input = {};
		};
	} ],
	"templateUrl":	'/component/login.html',
} );