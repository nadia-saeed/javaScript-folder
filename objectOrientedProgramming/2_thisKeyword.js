// method -> obj
// function -> global (window, global)

let video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.play()