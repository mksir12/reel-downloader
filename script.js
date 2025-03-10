async function downloadInstagram() {
    const urlInput = document.getElementById('reelUrl');
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('errorMessage');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const downloadButton = document.getElementById('downloadButton');

    if (!urlInput.value) {
        showError('Please enter a valid Instagram URL');
        return;
    }

    loading.classList.remove('hide');
    videoContainer.classList.add('hide');
    errorMessage.classList.add('hide');

    try {
        const apiUrl = `https://your-api-link.com/instagram?url=${encodeURIComponent(urlInput.value)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.video_url) {
            videoPlayer.src = data.video_url;
            downloadButton.href = data.video_url;
            videoContainer.classList.remove('hide');
        } else {
            showError('Could not fetch video. Check the link.');
        }
    } catch (error) {
        showError('An error occurred. Please try again.');
    } finally {
        loading.classList.add('hide');
    }
}

async function downloadYouTube() {
    const urlInput = document.getElementById('youtubeUrl');
    const format = document.getElementById('format').value;
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('errorMessage');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const downloadButton = document.getElementById('downloadButton');

    if (!urlInput.value) {
        showError('Please enter a valid YouTube URL');
        return;
    }

    loading.classList.remove('hide');
    videoContainer.classList.add('hide');
    errorMessage.classList.add('hide');

    try {
        const apiUrl = `https://your-api-link.com/youtube?url=${encodeURIComponent(urlInput.value)}&format=${format}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.video_url) {
            videoPlayer.src = data.video_url;
            downloadButton.href = data.video_url;
            videoContainer.classList.remove('hide');
        } else {
            showError('Could not fetch video. Check the link.');
        }
    } catch (error) {
        showError('An error occurred. Please try again.');
    } finally {
        loading.classList.add('hide');
    }
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hide');
}
