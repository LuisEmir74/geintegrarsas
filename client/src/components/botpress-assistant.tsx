export default function BotpressAssistant() {
  const handleClick = () => {
    window.open("https://wa.me/573155736200", "_blank");
  };

  return (
    <>
      <button onClick={handleClick} id="btn-botpress" data-testid="button-botpress-assistant">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </button>

      <style>{`
        #btn-botpress {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background-color: #25d366;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: pointer;
          border: none;
        }

        #btn-botpress img {
          width: 35px;
          height: 35px;
        }

        #btn-botpress:hover {
          background-color: #1ebe5b;
          transform: translateX(-50%) scale(1.05);
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
}

declare global {
  interface Window {
    botpressWebChat: {
      open: () => void;
      close: () => void;
    };
  }
}
