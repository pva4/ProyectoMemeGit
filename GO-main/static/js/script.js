// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Muestra el modal al hacer clic en el botón
    document.getElementById('walletButton').addEventListener('click', function () {
        const modal = document.getElementById('walletModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    });

    // Cierra el modal
    document.getElementById('closeModal').addEventListener('click', function () {
        const modal = document.getElementById('walletModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    });

    // Conectar con MetaMask
    document.getElementById('connectMetaMask').addEventListener('click', async function () {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await ethereum.request({ method: 'eth_requestAccounts' });
                alert('Wallet connected successfully!');
            } catch (error) {
                console.error('User denied wallet connection', error);
                alert('Connection request was denied. Please try again.');
            }
        } else {
            alert('MetaMask is not installed. Please install MetaMask to connect your wallet.');
        }
    });

    // Lógica para comprar tokens (simulada)
    document.getElementById('buyTokens').addEventListener('click', function () {
        const ethAmount = document.getElementById('ethAmount').value;
        const usdAmount = document.getElementById('usdAmount').value;
        const usdcAmount = document.getElementById('usdcAmount').value;

        if (!ethAmount || !usdAmount || !usdcAmount) {
            alert('Please fill in all fields.');
            return;
        }

        if (isNaN(ethAmount) || isNaN(usdAmount) || isNaN(usdcAmount)) {
            alert('Please enter valid numbers.');
            return;
        }

        try {
            // Aquí implementaría la lógica para interactuar con tu contrato inteligente
            alert(`Buying Go Meme with ${ethAmount} ETH, ${usdAmount} USD, or ${usdcAmount} USDC`);

            // Cerrar el modal
            const modal = document.getElementById('walletModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        } catch (error) {
            console.error('Error buying tokens', error);
            alert('An error occurred while attempting to buy tokens. Please try again.');
        }
    });
});

// JavaScript para copiar el número de la cartera
document.getElementById('copyWalletButton').addEventListener('click', function () {
    // Número de la cartera
    const walletNumber = '0x1234567890abcdef1234567890abcdef12345678';

    // Crear un elemento de textarea para usar el portapapeles
    const textarea = document.createElement('textarea');
    textarea.value = walletNumber;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Alerta opcional para confirmar la copia BORRAR
    alert('Wallet address copied to clipboard!');
});
