declare var Cookies: any;

/**
 * クッキー同意パネルの制御
 */
const initCookieConsent = (): void => {
  const agreeBtn = document.getElementById(
    "agreebtn"
  ) as HTMLButtonElement | null;
  const testBtn = document.getElementById(
    "testbtn"
  ) as HTMLButtonElement | null;
  const privacyPanel = document.getElementById(
    "privacy-panel"
  ) as HTMLDivElement | null;

  const agree: string | undefined = Cookies.get("cookie-agree");
  const panel = document.getElementById("privacy-panel");

  if (agree === "yes") {
    document.body.removeChild(panel);
    if (privacyPanel) privacyPanel.style.display = "none";
  } else {
    agreeBtn?.addEventListener("click", () => {
      Cookies.set("cookie-agree", "yes", { expires: 7 });
      document.body.removeChild(panel);
      alert("クッキーを保存しました");
      if (privacyPanel) privacyPanel.style.display = "none";
    });
  }

  testBtn?.addEventListener("click", () => {
    Cookies.remove("cookie-agree");
    alert("クッキーを削除しました。再読み込みしてください。");
    location.reload();
  });
};

document.addEventListener("DOMContentLoaded", initCookieConsent);
