/**
 * クッキー同意パネルの制御
 */
const initCookieConsent = () => {
    const agreeBtn = document.getElementById("agreebtn");
    const testBtn = document.getElementById("testbtn");
    const privacyPanel = document.getElementById("privacy-panel");
    const agree = Cookies.get("cookie-agree");
    const panel = document.getElementById("privacy-panel");
    if (agree === "yes") {
        document.body.removeChild(panel);
        if (privacyPanel)
            privacyPanel.style.display = "none";
    }
    else {
        agreeBtn?.addEventListener("click", () => {
            Cookies.set("cookie-agree", "yes", { expires: 7 });
            document.body.removeChild(panel);
            alert("クッキーを保存しました");
            if (privacyPanel)
                privacyPanel.style.display = "none";
        });
    }
    testBtn?.addEventListener("click", () => {
        Cookies.remove("cookie-agree");
        alert("クッキーを削除しました。再読み込みしてください。");
        location.reload();
    });
};
document.addEventListener("DOMContentLoaded", initCookieConsent);
export {};
//# sourceMappingURL=main.js.map