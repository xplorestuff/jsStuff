self.addEventListener('fetch', function(event) {
 
    var fetchRequest = event.request.clone();

         event.respondWith(fetch(fetchRequest,{  method: 'GET',
               mode: 'no-cors',
               cache: 'default' }).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have 2 stream.
            var responseToCache = response.clone();
            console.log("content length for "+fetchRequest.url+" is "+response.get('Content-Length'));

          

            return responseToCache;
          }
        )
        );

    
  
  
});