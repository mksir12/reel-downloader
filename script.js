async function downloadInstagram() {
    const url = document.getElementById("reelUrl").value;
    const loading = document.getElementById("loading");
    const videoPlayer = document.getElementById("videoPlayer");
    const downloadButton = document.getElementById("downloadButton");

    if (!url) {
        alert("Please enter an Instagram reel URL.");
        return;
    }

    loading.classList.remove("hide");

    try {
        const response = await fetch(`https://ytdl-amber.vercel.app/api/instagram?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.video_url) {
            videoPlayer.src = data.video_url;
            downloadButton.href = data.video_url;
            videoPlayer.classList.remove("hide");
            downloadButton.classList.remove("hide");
        } else {
            alert("Failed to get video. Please try again.");
        }
    } catch (error) {
        alert("Error processing request.");
    } finally {
        loading.classList.add("hide");
    }
}

async function downloadYouTube() {
    const url = document.getElementById("youtubeUrl").value;
    const format = document.getElementById("format").value;
    const loading = document.getElementById("loadingYT");
    const videoPlayer = document.getElementById("videoPlayerYT");
    const downloadButton = document.getElementById("downloadButtonYT");

    if (!url) {
        alert("Please enter a YouTube video URL.");
        return;
    }

    loading.classList.remove("hide");

    try {
        const response = await fetch(`https://ytdl-amber.vercel.app/api/youtube?url=${encodeURIComponent(url)}&format=${format}`);
        const data = await response.json();

        if (data.video_url) {
            if (format === "mp4") {
                videoPlayer.src = data.video_url;
                videoPlayer.classList.remove("hide");
            }
            downloadButton.href = data.video_url;
            downloadButton.classList.remove("hide");
        } else {
            alert("Failed to get video. Please try again.");
        }
    } catch (error) {
        alert("Error processing request.");
    } finally {
        loading.classList.add("hide");
    }
}
