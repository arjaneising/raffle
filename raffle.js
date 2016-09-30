;(function (win, doc) {

  let button;
  let list;

  // Initialise page: listen to events
  function init() {

    button = doc.querySelector('.raffle');
    button.addEventListener('click', start);

    list = doc.querySelector('.nominees');

  }


  // Start the raffle
  function start() {

    // Randomize nominee list
    shuffleNominees();

    // Apply CSS rotation transform to spread all nominees over the 360deg circle
    setTransforms();


    // Enable rotating animation
    list.classList.add('go');

    // Remove raffle button
    button.parentNode.removeChild(button);

  }

  function shuffleNominees() {

    // Get an array of nominee nodes
    const nominees = Array.from(list.querySelectorAll('li'));

    // Randomly sort the array
    nominees.sort((a, b) => { return Math.random() - 0.5 });

    // Appending nodes moves nodes in new order
    nominees.forEach((node) => {

      list.appendChild(node);

    });

  }

  function setTransforms() {

    const nominees = Array.from(list.querySelectorAll('li'));
    const count = nominees.length;

    // Calculate per node what rotation offset it should get
    nominees.forEach((node, i) => {

      const rotate = (i / count) * 360;
      node.style.transform = `rotate(${rotate}deg) translateY(-50%)`;

    });

  }

  win.addEventListener('load', init);

})(window, document);
