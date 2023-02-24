'use strict';
{
  $(function(){

    $('.modal_open').click(function(){
      $('#over_lay, .modal_window').fadeIn();
    });
    
    $('.modal_cancel').click(function(){
      $('#over_lay, .modal_window, .add_modal_window').fadeOut();
    });
    
    $('.modal_done').click(function(){
      $('#over_lay, .modal_window').fadeOut();

      const addedName = document.getElementById('modal_input_name').value;
      
      const addedComment = document.getElementById('modal_input_comment').value;
      
      // console.log(addedName);

      const newElement = document.createElement("p");

      const newName = document.createTextNode(addedName + ' ' + addedComment);
      
      // const newComment = document.createTextNode(addedComment);

      newElement.appendChild(newName);
      
      // newElement.appendChild(newComment);

      newElement.setAttribute("class","addedContent");

      var parentDiv = document.getElementById('added_names');
      
      // var parentDivComment = document.getElementById('added_comments');

      parentDiv.appendChild(newElement);

    });

    $('.add_modal_open').click(function(){
      $('#over_lay, .add_modal_window').fadeIn();
    });

    $('.add_modal_cancel').click(function(){
      $('#over_lay, .modal_window, .add_modal_window').fadeOut();
    });

    $('.add_modal_done').click(function(){
      $('#over_lay, .modal_window, .add_modal_window').fadeOut();

      const addedHost = document.getElementById('add_modal_input_name').value;
      // 藤井愛弓

      const addedEvent = document.getElementById('add_modal_input_comment').value;
      // 簿記の勉強

      const newEventElement = document.createElement("div");

      newEventElement.setAttribute("class","card");
      newEventElement.setAttribute("id","card1");

      const cardsWrapper = document.getElementById('cards_wrapper');

      
      
      
      cardsWrapper.appendChild(newEventElement);
      
      
      document.getElementById('card1').innerHTML = `          <div class="card_inner">
      <div class="card_name">${addedEvent}</div>
      <div class="participants">${addedHost}</div>
    </div>
    <div class="card_inner card_inner_nav">
      <div class="button_wrapper">
        <button class="card_add_reaction modal_open">
          <div>
            コメントする
          </div>
        </button>
      </div>
      <div class="added_contents">
        <div class="added_names" id="added_names">
        </div>
      </div>
    </div>`;


    });


  })
}