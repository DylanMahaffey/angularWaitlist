

app.directive("formDirective", function() {
    return {
    	templateUrl: 'app/directives/formDirective.html'
        //template: "<!-- The Modal --> <div id='myModal' class='modal'> <!-- Modal content --><div class='modal-content'><span class='close'>x</span> <div id='form' data-ng-app=''>	 	<p>Name: <br><input type='text' data-ng-model='name' placeholder = 'John Doe'maxlength='19'></p> 	 	<p>Phone Number: <br><input type='text' data-ng-model='phone' placeholder = '(xxx)-xxx-xxxx'maxlength='10'></p> 	<p>Party Size: <br><input type='number' data-ng-model='size'></p> 	 	 	<p>Prefered Section: 	<br><select data-ng-model='section'>			  <option value='0'>No Preference</option>			  <option value='1'>Place 1</option>			  <option value='2'>Place 2</option>			</select></p>	 	<!--  <h1>Hello: {{name}}</h1>  -->	 	 <!-- 	<h1>Number: {{phone}}</h1> -->	 	<!--<h1>Section: {{section}}</h1>	 --> 	<button id='submit' ng-click='createParty()'>Submit</button>	</div></div></div>"
    };
});
