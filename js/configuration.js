const defaultConfig = `{

    "glass": {
        "background": "rgba(43,43,43, 0.25)",
        "backgroundHover": "rgba(47, 43, 48, 0.35)",
        "blur": 30
    },

    "background": {
        "url": "https://cdn.bean.codes/a/cabin.png",
        "snow": {
            "enabled": false,
            "count": 200
        },
        "mist": {
            "enabled": true,
            "opacity": 6
        }
    }
}`;

function runtime() {
    if (localStorage.getItem("saferoom_config") == undefined) localStorage.setItem("saferoom_config", defaultConfig);
    document.getElementById("textbox").value = localStorage.getItem('saferoom_config');
    document.getElementById("save").onclick = doSaving;
    var text = document.getElementById("textbox");
    function checkValid() {
        var val;
        try {
            JSON.parse(text.value)
        } catch (e) {
            val = false;
        }
        if (val == false) return false;
        else return true;
    }
    function doSaving() {
        if (checkValid() == false) {
            console.log("File failed JSON checks");
            alert("JSON is invalid!");
        } else {
            console.log("File passed JSON checks");
            localStorage.setItem("saferoom_config", text.value);
            window.location.href = "index.html";
        };
    };
};

document.onLoad = runtime();