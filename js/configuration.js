const defaultConfig = `{
    "bookmarks": [
        {
            "category": "Social Media",
            "bookmarks": [
                { "label": "Facebook",          "url": "https://www.facebook.com" },
                { "label": "Messenger",         "url": "https://www.messenger.com" },
                { "label": "Instagram",         "url": "https://www.instagram.com" }
            ]
        },
        {
            "category": "Entertainment",
            "bookmarks": [
                { "label": "YouTube",           "url": "https://www.youtube.com" },
                { "label": "Twitch",            "url": "https://www.twitch.com" }
            ]
        }
    ],

    "glass": {
        "background": "rgba(47, 43, 48, 0.568)",
        "backgroundHover": "rgba(47, 43, 48, 0.568)",
        "blur": 12
    },

    "background": {
        "url": "https://images.wallpapersden.com/image/download/night-mountains-summer-illustration_a2plamaUmZqaraWkpJRsa25trWloaGU.jpg",
        "snow": {
            "enabled": false,
            "count": 200
        },
        "mist": {
            "enabled": false,
            "opacity": 5
        },
        "css": ""
    }
}`;

function runtime() {
    if (localStorage.getItem("saferoom_config") == undefined) localStorage.setItem("saferoom_config", defaultConfig);
    document.getElementById("textbox").value = localStorage.getItem('saferoom_config');
    document.getElementById("save").onclick = doSaving;
    document.getElementById("reset").onclick = resetSettings;
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
    async function resetSettings() {
        const opt = await confirm("Are you sure you want to reset your settings?");
        if (opt == true) {
            console.log("Reset settings");
            localStorage.setItem("saferoom_config", defaultConfig);
            window.location.href = "index.html";
        } if (opt == false) {
            console.log("Settings reset was attempted, but user cancelled");
        };
    };
};

document.onLoad = runtime();