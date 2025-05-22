const video = document.getElementById('videoElement');
  const infoText = document.querySelector('.info-text');

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      infoText.textContent = "Cámara activa";
    } catch (err) {
      infoText.textContent = "Error al acceder a la cámara: " + err.message;
      infoText.style.color = '#ff5555';
    }
  }

  startCamera();