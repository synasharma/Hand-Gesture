Webcam.set
({
width:350,
height:330,
dest_width:345,
dest_height:300,
image_format:'png',
png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function cap_pic()
{
    Webcam.snap(function (data_uri){
       document.getElementById("result").innerHTML="<img id='captured_pic'src="+data_uri+">";
    });
}

console.log("ml5.version of javascript",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nDolTVZwU/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model has Loaded!")
}

function speak()
{
    var synth=window.speechSynthesis;
    var speak_data_1="The first prediction is"+prediction_1;
    var speak_data_2="The second prediction is"+prediction_2;
    var utterance= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterance);
}



function guess_pic()
{
    img=document.getElementById("captured_pic");
    classifier.classify(img,getResult);
}

function getResult(error,result)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
        prediction_1=result[0].label;
        prediction_2=result[1].label;
        document.getElementById("result_1").innerHTML=prediction_1;
        document.getElementById("result_2").innerHTML=prediction_2;
        speak();

        if(prediction_1=="Thumbs Up")
        {
            document.getElementById("emoji_1").innerHTML="&#128077";
        }
        if(prediction_1=="Ok gesture")
        {
            document.getElementById("emoji_1").innerHTML="&#x1F44C;";
        }
        if(prediction_1=="Victory Sign/Peace Sign")
        {
            document.getElementById("emoji_1").innerHTML="&#x270c;";
        }
        if(prediction_1=="Good Bye!")
        {
            document.getElementById("emoji_1").innerHTML="&#x1F44B;";
        }
        if(prediction_1=="Good luck!")
        {
            document.getElementById("emoji_1").innerHTML="&#x1f91e;";
        }
        if(prediction_1=="Greetings!")
        {
            document.getElementById("emoji_1").innerHTML="	&#128591;";
        }
        if(prediction_2=="Thumbs Up")
        {
            document.getElementById("emoji_2").innerHTML="&#128077";
        }
        if(prediction_2=="Ok gesture")
        {
            document.getElementById("emoji_2").innerHTML="&#x1F44C;";
        }
        if(prediction_2=="Victory Sign/Peace Sign")
        {
            document.getElementById("emoji_2").innerHTML="&#x270c;";
        }
        if(prediction_2=="Good Bye!")
        {
            document.getElementById("emoji_2").innerHTML="&#x1F44B;";
        }
        if(prediction_2=="Good luck!")
        {
            document.getElementById("emoji_2").innerHTML="&#x1f91e;";
        }
        if(prediction_2=="Greetings!")
        {
            document.getElementById("emoji_2").innerHTML="	&#128591;";
        }
    }
}