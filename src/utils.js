/**
 * This a Youtube class.
 * It contains vaious actions that can be made on a Youtube page via Developer's tools.
 * May be quite helpful when doing time-cost operations, that Youtube doesn't allow to do
 * via it's interface.
 */
class Youtube {
	/**
	 * This division essentially contains tools for deleting all sorts of stuff from
	 * your personal youtube account.
	 *
	 * ! WARNING !
	 *
	 * These functions are quite resource-costing, so don't spam it or use in a loop,
	 * 'cause otherwise your device might freeze very-very badly.
	 * Also, it is recommended to refresh the page after using it more than 4-5 times.
	 */
	deletion = {
		/**
		 * This function will delete first n liked videos on youtube once you're
		 * on the right page, because otherwise it won't work.
		 * n shouldn't be bigger than 100, 'cause Youtube loads only 100 videos at a time
		 * (although, their number is sometimes around 200).
		 */
		likedVideos: (n) => {
			const videos = document.querySelectorAll(
				"html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-browse.style-scope.ytd-page-manager ytd-two-column-browse-results-renderer.style-scope.ytd-browse.grid.grid-disabled div#primary.style-scope.ytd-two-column-browse-results-renderer ytd-section-list-renderer.style-scope.ytd-two-column-browse-results-renderer div#contents.style-scope.ytd-section-list-renderer ytd-item-section-renderer.style-scope.ytd-section-list-renderer div#contents.style-scope.ytd-item-section-renderer ytd-playlist-video-list-renderer.style-scope.ytd-item-section-renderer div#contents.style-scope.ytd-playlist-video-list-renderer ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer div#menu.style-scope.ytd-playlist-video-renderer ytd-menu-renderer.style-scope.ytd-playlist-video-renderer yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer button#button.style-scope.yt-icon-button"
			)

			let currentMenu
			let deleteButton

			for (let i = 0; i < n; i++) {
				videos[i].click()
				currentMenu = document.querySelectorAll(
					"html body ytd-app ytd-popup-container.style-scope.ytd-app tp-yt-iron-dropdown.style-scope.ytd-popup-container div#contentWrapper.style-scope.tp-yt-iron-dropdown ytd-menu-popup-renderer.style-scope.ytd-popup-container tp-yt-paper-listbox#items.style-scope.ytd-menu-popup-renderer ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer"
				)
				deleteButton = currentMenu[currentMenu.length - 1]
				deleteButton.click()
			}
		},

		/**
		 * Deletes the maximum possible amount of liked videos on Youtube (less than of equal to 100).
		 * May be a bit slower than Youtube.deletion.likedVideos(n) function.
		 */
		likedVideosMax: () => {
			const videos = document.querySelectorAll(
				"html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-browse.style-scope.ytd-page-manager ytd-two-column-browse-results-renderer.style-scope.ytd-browse.grid.grid-disabled div#primary.style-scope.ytd-two-column-browse-results-renderer ytd-section-list-renderer.style-scope.ytd-two-column-browse-results-renderer div#contents.style-scope.ytd-section-list-renderer ytd-item-section-renderer.style-scope.ytd-section-list-renderer div#contents.style-scope.ytd-item-section-renderer ytd-playlist-video-list-renderer.style-scope.ytd-item-section-renderer div#contents.style-scope.ytd-playlist-video-list-renderer ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer div#menu.style-scope.ytd-playlist-video-renderer ytd-menu-renderer.style-scope.ytd-playlist-video-renderer yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer button#button.style-scope.yt-icon-button"
			)

			let deleteButton
			let currentMenu

			for (let i = 0; i < videos.length; i++) {
				videos[i].click()
				currentMenu = document.querySelectorAll(
					"html body ytd-app ytd-popup-container.style-scope.ytd-app tp-yt-iron-dropdown.style-scope.ytd-popup-container div#contentWrapper.style-scope.tp-yt-iron-dropdown ytd-menu-popup-renderer.style-scope.ytd-popup-container tp-yt-paper-listbox#items.style-scope.ytd-menu-popup-renderer ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer"
				)
				deleteButton = currentMenu[currentMenu.length - 1]
				deleteButton.click()
			}
		},
	}

	/**
	 * This division contains varioius functions connected with search.
	 */
	search = {
		/**
		 * Makes a search query.
		 */
		makeQuery: (query) => {
			const [searchBox, searchBar, searchButton] = [
				document.querySelector(
					"html body ytd-app div#content.style-scope.ytd-app div#masthead-container.style-scope.ytd-app ytd-masthead#masthead.masthead-finish div#container.style-scope.ytd-masthead div#center.style-scope.ytd-masthead ytd-searchbox#search.style-scope.ytd-masthead form#search-form.style-scope.ytd-searchbox"
				),
				document.querySelector(
					"html body ytd-app div#content.style-scope.ytd-app div#masthead-container.style-scope.ytd-app ytd-masthead#masthead.masthead-finish div#container.style-scope.ytd-masthead div#center.style-scope.ytd-masthead ytd-searchbox#search.style-scope.ytd-masthead form#search-form.style-scope.ytd-searchbox div#container.style-scope.ytd-searchbox div#search-input.ytd-searchbox-spt div.gstl_50.sbib_a div#sb_ifc50.sbib_b input#search.gsfi.ytd-searchbox"
				),
				document.querySelector(
					"html body ytd-app div#content.style-scope.ytd-app div#masthead-container.style-scope.ytd-app ytd-masthead#masthead.masthead-finish div#container.style-scope.ytd-masthead div#center.style-scope.ytd-masthead ytd-searchbox#search.style-scope.ytd-masthead button#search-icon-legacy.style-scope.ytd-searchbox"
				),
			]

			searchBar.value = query
			searchBox.focus()
			searchButton.click()
		},
	}
}
