var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_img_width=30;
block_img_height=30;

player_object="";
block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.se({
            top:player_y,
            left:player_x

        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x

        });

        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='80'&& e.shiftKey==true){
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keyPressed=='77'&& e.shiftKey==true){
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keyPressed=='38'){
        up();
        console.log("up");
    }

    if(keyPressed=='40'){
        down();
        console.log("down");
    }

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed=='39'){
        right();
        console.log("right");
    }

    if(keyPressed=='67'){
        new_image("captain_america_left_hand.png");
        console.log("c");
    }

    if(keyPressed=='70'){
        new_image("final_output.png");
        console.log("f");
    }

    if(keyPressed=='72'){
        new_image("hulk_face.png");
        console.log("h");
    }

    if(keyPressed=='76'){
        new_image("hulk_left_hand.png");
        console.log("l");
    }

    if(keyPressed=='69'){
        new_image("hulk_legs.png");
        console.log("e");
    }

    if(keyPressed=='66'){
        new_image("hulkd_body.png");
        console.log("b");
    }

    if(keyPressed=='73'){
        new_image("ironman_body.png");
        console.log("i");
    }

    if(keyPressed=='70'){
        new_image("ironman_face.png");
        console.log("f");
    }

    if(keyPressed=='85'){
        new_image("ironman_left_hand.png");
        console.log("u");
    }

    if(keyPressed=='71'){
        new_image("ironman_legs.png");
        console.log("g");
    }

    if(keyPressed=='82'){
        new_image("ironman_right_hand.png");
        console.log("r");
    }

    if(keyPressed=='80'){
        new_image("player.png");
        console.log("p");
    }

    if(keyPressed=='83'){
        new_image("spiderman_body.png");
        console.log("s");
    }

    if(keyPressed=='65'){
        new_image("spiderman_face.png");
        console.log("a");
    }
}

function up(){
    if(player_y >=0){
        player_y=player_y-block_img_height;
        console.log("block img height="+block_img_height);
        console.log("when up pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
  
        player_update();
    }
  }
  
  function down(){
      if(player_y <=500){
          player_y=player_y+block_img_height;
          console.log("block img height="+block_img_height);
          console.log("when down pressed x="+player_x+"y="+player_y);
          canvas.remove(player_object);
  
          player_update();
      }
  }
  
  function left(){
      if(player_x >=0){
          player_x=player_x-block_img_width;
          console.log("block img width="+block_img_width);
          console.log("when down pressed x="+player_x+"y="+player_y);
          canvas.remove(player_object);
  
          player_update();
          
      }
  }
  
  function right(){
      if(player_x <=900){
          player_x=player_x+block_img_width;
          console.log("block img width="+block_img_width);
          console.log("when right pressed x="+player_x+"y="+player_y);
          canvas.remove(player_object);
  
          player_update();
      }
  }
  
  
  
