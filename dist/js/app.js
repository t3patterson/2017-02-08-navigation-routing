(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//-------------------------------------
//TASK : Tabbed Content
// When a user selects a tab (e.g. <span class="tabcontent__tab" data-tab="press">Press</span>)
//    it should 
//       (1) give that element a class of 'active'
//       (2) remove the class of active from the <span> element that is no longer active
//       (3) inject the relevant HTML content into <div class="tabcontent__content">
//            (the html content is included below )
//-------------------------------------

var pageContentObj = {
	home: '\n\t\t<div class="main">\n\t\t\t \n\t\t<h2>Join Us Today!</h2>\n\t\t<p>You can be part of the Paley Center community as an <em>Individual Member</em>, <em>Patron Member</em>, <em>Media Council Member</em>, or <em>Corporate Member</em>. All include very special benefits for YOU while supporting the Paley Center\u2019s essential programs.</p>\n\t\t<p class="smalltext">The Paley Center is a 501(c)3 nonprofit organization; our work and programs are dependent on your support.</p>\n\t\t\t \n\t\t</div>\n\t',
	screenings: '\n\t\t<h2>Screenings</h2>\n\t\t<p>Saturdays and Sundays in New York and Los Angeles</p>\n\t\t<p>12:15 to 4:00 pm local time \u2022 FREE Admission</p>\n\n\t\t<a href="#"> Visit New York</a>  |  <a>Visit Los Angeles</a>\n\n\t\t<p>Weekend Screenings from the Paley Archive on the Big Screen in NY & LA offer great family entertainment, PLUS programming selected by our Members and screened for the public. You haven\'t really experienced TV until you\'ve seen it on a movie-size screen with fellow fans.</p>\n\t',
	press: '\n\t\t\t<h2>Press</h2>\n\t\t\t<hr/>\n\t\t\t\n\t\t\t<h4>Current Press Releases</h4>\n\t\t\t<p><small>Read More</small></p>\n\t\t\t<hr/>\n\t\t\t<h4>Press Release Archive</h4>\n\t\t\t<p><small>Read More</small>\n\t\t\t<hr/>\n\t\t\t<h4>Press Kit/Logos</h4>\n\t\t\t<p>View and download press materials.</p>\n\t\t\t<p><small>Read More</small>\n\t\t\t<hr/>\n\n\t\t\t<h4>Register for Press Information</h4>\n\t\t\t<p><small>Click to fill out the form</small></p>\n\t',
	programs: '\n\t\t<h2>Public Programs</h2>\n\t\t<ul>\n\t\t\t<li>PaleyLive LA</li>\n\t\t\t<li>PaleyLive NY</li>\n\t\t\t<li>Paley Impact</li>\n\t\t\t<li>Patron Circle & President\'s Circle</li>\n\t\t</ul>\n\t'
};

var tabsContainerEl = document.querySelector('.tabcontent__list');

function renderActiveTab(theCurrentRoute) {
	// var previousActiveTabEl = document.querySelector('.tabcontent__tab.active')
	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]');
	previousActiveTabEl.classList.remove('active');

	var currentActiveTabEl = document.querySelector('[data-route="' + theCurrentRoute + '"]');
	currentActiveTabEl.classList.add('active');
}

function renderContentTo(domEl, theRoute, theContent) {

	if (theRoute === 'home') {
		return domEl.innerHTML = theContent[theRoute];
	}
	if (theRoute === 'programs') {
		return domEl.innerHTML = theContent[theRoute];
	}
	if (theRoute === 'screenings') {
		return domEl.innerHTML = theContent[theRoute];
	}
	if (theRoute === 'press') {
		return domEl.innerHTML = theContent[theRoute];
	}

	domEl.innerHTML = theContent.home;
	window.location.hash = '';
}

var controllerRouter = function controllerRouter() {
	var currentRoute = window.location.hash.slice(1);
	if (currentRoute.length === 0) {
		currentRoute = 'home';
	}
	var pageContentEl = document.querySelector('.page_content');
	renderActiveTab(currentRoute);
	renderContentTo(pageContentEl, currentRoute, pageContentObj);
};

tabsContainerEl.addEventListener('click', function (evt) {
	var clickedTabEl = evt.target;
	var route = clickedTabEl.dataset.route;
	window.location.hash = route;
});

controllerRouter();
window.addEventListener('hashchange', controllerRouter);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDcEIsaWdCQURvQjtBQVVwQiwyZ0JBVm9CO0FBbUJwQixvZEFuQm9CO0FBcUNwQjtBQXJDb0IsQ0FBckI7O0FBZ0RBLElBQUksa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7O0FBRUEsU0FBUyxlQUFULENBQXlCLGVBQXpCLEVBQXlDO0FBQ3hDO0FBQ0EsS0FBSSxzQkFBc0IsU0FBUyxhQUFULENBQXVCLGtDQUF2QixDQUExQjtBQUNBLHFCQUFvQixTQUFwQixDQUE4QixNQUE5QixDQUFxQyxRQUFyQzs7QUFFQSxLQUFJLHFCQUFxQixTQUFTLGFBQVQsbUJBQXVDLGVBQXZDLFFBQXpCO0FBQ0Esb0JBQW1CLFNBQW5CLENBQTZCLEdBQTdCLENBQWlDLFFBQWpDO0FBQ0E7O0FBRUQsU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDLFVBQTFDLEVBQXFEOztBQUVwRCxLQUFJLGFBQWEsTUFBakIsRUFBeUI7QUFBRyxTQUFPLE1BQU0sU0FBTixHQUFrQixXQUFXLFFBQVgsQ0FBekI7QUFBK0M7QUFDM0UsS0FBSSxhQUFhLFVBQWpCLEVBQTZCO0FBQUcsU0FBTyxNQUFNLFNBQU4sR0FBa0IsV0FBVyxRQUFYLENBQXpCO0FBQStDO0FBQy9FLEtBQUksYUFBYSxZQUFqQixFQUErQjtBQUFFLFNBQVEsTUFBTSxTQUFOLEdBQWtCLFdBQVcsUUFBWCxDQUExQjtBQUFnRDtBQUNqRixLQUFJLGFBQWEsT0FBakIsRUFBMEI7QUFBRyxTQUFPLE1BQU0sU0FBTixHQUFrQixXQUFXLFFBQVgsQ0FBekI7QUFBK0M7O0FBRTVFLE9BQU0sU0FBTixHQUFrQixXQUFXLElBQTdCO0FBQ0EsUUFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0E7O0FBRUQsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVU7QUFDaEMsS0FBSSxlQUFlLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixDQUEzQixDQUFuQjtBQUNBLEtBQUcsYUFBYSxNQUFiLEtBQXdCLENBQTNCLEVBQTZCO0FBQUUsaUJBQWUsTUFBZjtBQUF1QjtBQUN0RCxLQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxpQkFBZ0IsWUFBaEI7QUFDQSxpQkFBZ0IsYUFBaEIsRUFBK0IsWUFBL0IsRUFBNkMsY0FBN0M7QUFDQSxDQU5EOztBQVNBLGdCQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBUyxHQUFULEVBQWE7QUFDdEQsS0FBSSxlQUFlLElBQUksTUFBdkI7QUFDQSxLQUFJLFFBQVEsYUFBYSxPQUFiLENBQXFCLEtBQWpDO0FBQ0EsUUFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEtBQXZCO0FBQ0EsQ0FKRDs7QUFPQTtBQUNBLE9BQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9UQVNLIDogVGFiYmVkIENvbnRlbnRcbi8vIFdoZW4gYSB1c2VyIHNlbGVjdHMgYSB0YWIgKGUuZy4gPHNwYW4gY2xhc3M9XCJ0YWJjb250ZW50X190YWJcIiBkYXRhLXRhYj1cInByZXNzXCI+UHJlc3M8L3NwYW4+KVxuLy8gICAgaXQgc2hvdWxkIFxuLy8gICAgICAgKDEpIGdpdmUgdGhhdCBlbGVtZW50IGEgY2xhc3Mgb2YgJ2FjdGl2ZSdcbi8vICAgICAgICgyKSByZW1vdmUgdGhlIGNsYXNzIG9mIGFjdGl2ZSBmcm9tIHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGlzIG5vIGxvbmdlciBhY3RpdmVcbi8vICAgICAgICgzKSBpbmplY3QgdGhlIHJlbGV2YW50IEhUTUwgY29udGVudCBpbnRvIDxkaXYgY2xhc3M9XCJ0YWJjb250ZW50X19jb250ZW50XCI+XG4vLyAgICAgICAgICAgICh0aGUgaHRtbCBjb250ZW50IGlzIGluY2x1ZGVkIGJlbG93IClcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgcGFnZUNvbnRlbnRPYmogPSB7XG5cdGhvbWU6ICBgXG5cdFx0PGRpdiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdCBcblx0XHQ8aDI+Sm9pbiBVcyBUb2RheSE8L2gyPlxuXHRcdDxwPllvdSBjYW4gYmUgcGFydCBvZiB0aGUgUGFsZXkgQ2VudGVyIGNvbW11bml0eSBhcyBhbiA8ZW0+SW5kaXZpZHVhbCBNZW1iZXI8L2VtPiwgPGVtPlBhdHJvbiBNZW1iZXI8L2VtPiwgPGVtPk1lZGlhIENvdW5jaWwgTWVtYmVyPC9lbT4sIG9yIDxlbT5Db3Jwb3JhdGUgTWVtYmVyPC9lbT4uIEFsbCBpbmNsdWRlIHZlcnkgc3BlY2lhbCBiZW5lZml0cyBmb3IgWU9VIHdoaWxlIHN1cHBvcnRpbmcgdGhlIFBhbGV5IENlbnRlcuKAmXMgZXNzZW50aWFsIHByb2dyYW1zLjwvcD5cblx0XHQ8cCBjbGFzcz1cInNtYWxsdGV4dFwiPlRoZSBQYWxleSBDZW50ZXIgaXMgYSA1MDEoYykzIG5vbnByb2ZpdCBvcmdhbml6YXRpb247IG91ciB3b3JrIGFuZCBwcm9ncmFtcyBhcmUgZGVwZW5kZW50IG9uIHlvdXIgc3VwcG9ydC48L3A+XG5cdFx0XHQgXG5cdFx0PC9kaXY+XG5cdGAsXG5cdHNjcmVlbmluZ3M6ICBgXG5cdFx0PGgyPlNjcmVlbmluZ3M8L2gyPlxuXHRcdDxwPlNhdHVyZGF5cyBhbmQgU3VuZGF5cyBpbiBOZXcgWW9yayBhbmQgTG9zIEFuZ2VsZXM8L3A+XG5cdFx0PHA+MTI6MTUgdG8gNDowMCBwbSBsb2NhbCB0aW1lIOKAoiBGUkVFIEFkbWlzc2lvbjwvcD5cblxuXHRcdDxhIGhyZWY9XCIjXCI+IFZpc2l0IE5ldyBZb3JrPC9hPiAgfCAgPGE+VmlzaXQgTG9zIEFuZ2VsZXM8L2E+XG5cblx0XHQ8cD5XZWVrZW5kIFNjcmVlbmluZ3MgZnJvbSB0aGUgUGFsZXkgQXJjaGl2ZSBvbiB0aGUgQmlnIFNjcmVlbiBpbiBOWSAmIExBIG9mZmVyIGdyZWF0IGZhbWlseSBlbnRlcnRhaW5tZW50LCBQTFVTIHByb2dyYW1taW5nIHNlbGVjdGVkIGJ5IG91ciBNZW1iZXJzIGFuZCBzY3JlZW5lZCBmb3IgdGhlIHB1YmxpYy4gWW91IGhhdmVuJ3QgcmVhbGx5IGV4cGVyaWVuY2VkIFRWIHVudGlsIHlvdSd2ZSBzZWVuIGl0IG9uIGEgbW92aWUtc2l6ZSBzY3JlZW4gd2l0aCBmZWxsb3cgZmFucy48L3A+XG5cdGAsXG5cdHByZXNzOiBgXG5cdFx0XHQ8aDI+UHJlc3M8L2gyPlxuXHRcdFx0PGhyLz5cblx0XHRcdFxuXHRcdFx0PGg0PkN1cnJlbnQgUHJlc3MgUmVsZWFzZXM8L2g0PlxuXHRcdFx0PHA+PHNtYWxsPlJlYWQgTW9yZTwvc21hbGw+PC9wPlxuXHRcdFx0PGhyLz5cblx0XHRcdDxoND5QcmVzcyBSZWxlYXNlIEFyY2hpdmU8L2g0PlxuXHRcdFx0PHA+PHNtYWxsPlJlYWQgTW9yZTwvc21hbGw+XG5cdFx0XHQ8aHIvPlxuXHRcdFx0PGg0PlByZXNzIEtpdC9Mb2dvczwvaDQ+XG5cdFx0XHQ8cD5WaWV3IGFuZCBkb3dubG9hZCBwcmVzcyBtYXRlcmlhbHMuPC9wPlxuXHRcdFx0PHA+PHNtYWxsPlJlYWQgTW9yZTwvc21hbGw+XG5cdFx0XHQ8aHIvPlxuXG5cdFx0XHQ8aDQ+UmVnaXN0ZXIgZm9yIFByZXNzIEluZm9ybWF0aW9uPC9oND5cblx0XHRcdDxwPjxzbWFsbD5DbGljayB0byBmaWxsIG91dCB0aGUgZm9ybTwvc21hbGw+PC9wPlxuXHRgLFxuXHRwcm9ncmFtczogIGBcblx0XHQ8aDI+UHVibGljIFByb2dyYW1zPC9oMj5cblx0XHQ8dWw+XG5cdFx0XHQ8bGk+UGFsZXlMaXZlIExBPC9saT5cblx0XHRcdDxsaT5QYWxleUxpdmUgTlk8L2xpPlxuXHRcdFx0PGxpPlBhbGV5IEltcGFjdDwvbGk+XG5cdFx0XHQ8bGk+UGF0cm9uIENpcmNsZSAmIFByZXNpZGVudCdzIENpcmNsZTwvbGk+XG5cdFx0PC91bD5cblx0YFxufVxuXG52YXIgdGFic0NvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmNvbnRlbnRfX2xpc3QnKVxuXG5mdW5jdGlvbiByZW5kZXJBY3RpdmVUYWIodGhlQ3VycmVudFJvdXRlKXtcblx0Ly8gdmFyIHByZXZpb3VzQWN0aXZlVGFiRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiY29udGVudF9fdGFiLmFjdGl2ZScpXG5cdHZhciBwcmV2aW91c0FjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwidGFiY29udGVudF9fdGFiIGFjdGl2ZVwiXScpXG5cdHByZXZpb3VzQWN0aXZlVGFiRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0XG5cdHZhciBjdXJyZW50QWN0aXZlVGFiRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3V0ZT1cIiR7dGhlQ3VycmVudFJvdXRlfVwiXWApXG5cdGN1cnJlbnRBY3RpdmVUYWJFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxufVxuXG5mdW5jdGlvbiByZW5kZXJDb250ZW50VG8oZG9tRWwsIHRoZVJvdXRlLCB0aGVDb250ZW50KXtcblx0XG5cdGlmKCB0aGVSb3V0ZSA9PT0gJ2hvbWUnICl7ICByZXR1cm4gZG9tRWwuaW5uZXJIVE1MID0gdGhlQ29udGVudFt0aGVSb3V0ZV0gfVxuXHRpZiggdGhlUm91dGUgPT09ICdwcm9ncmFtcycgKXsgIHJldHVybiBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXSB9XG5cdGlmKCB0aGVSb3V0ZSA9PT0gJ3NjcmVlbmluZ3MnICl7IHJldHVybiAgZG9tRWwuaW5uZXJIVE1MID0gdGhlQ29udGVudFt0aGVSb3V0ZV0gfVxuXHRpZiggdGhlUm91dGUgPT09ICdwcmVzcycgKXsgIHJldHVybiBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXSB9XG5cdFxuXHRkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50LmhvbWVcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJ1xufVxuXG52YXIgY29udHJvbGxlclJvdXRlciA9IGZ1bmN0aW9uKCl7XG5cdHZhciBjdXJyZW50Um91dGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKVxuXHRpZihjdXJyZW50Um91dGUubGVuZ3RoID09PSAwKXsgY3VycmVudFJvdXRlID0gJ2hvbWUnIH1cblx0dmFyIHBhZ2VDb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9jb250ZW50Jylcblx0cmVuZGVyQWN0aXZlVGFiKGN1cnJlbnRSb3V0ZSlcblx0cmVuZGVyQ29udGVudFRvKHBhZ2VDb250ZW50RWwsIGN1cnJlbnRSb3V0ZSwgcGFnZUNvbnRlbnRPYmopXG59XG5cblxudGFic0NvbnRhaW5lckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KXtcblx0dmFyIGNsaWNrZWRUYWJFbCA9IGV2dC50YXJnZXRcblx0dmFyIHJvdXRlID0gY2xpY2tlZFRhYkVsLmRhdGFzZXQucm91dGVcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSByb3V0ZVxufSlcblxuXG5jb250cm9sbGVyUm91dGVyKClcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY29udHJvbGxlclJvdXRlcilcbiJdfQ==
