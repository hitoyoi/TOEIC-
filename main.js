<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多益考點字系統 - 記憶學習版</title>
    <style>
        :root {
            --primary: #4a90e2;
            --primary-hover: #357abd;
            --success: #2ecc71;
            --success-hover: #27ae60;
            --danger: #e74c3c;
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #2c3e50;
            --text-muted: #7f8c8d;
            --border-color: #e2e8f0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            padding: 20px;
            color: var(--text-main);
            line-height: 1.6;
        }

        .container { background-color: transparent; width: 100%; max-width: 850px; margin: 0 auto; }
        h1 { text-align: center; font-size: 28px; margin-bottom: 25px; color: var(--text-main); font-weight: 700; letter-spacing: 1px; }

        .glass-card {
            background-color: var(--card-bg); padding: 20px; border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            margin-bottom: 20px; border: 1px solid var(--border-color);
        }

        .global-settings { display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap; }
        select { font-size: 15px; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; background-color: #f1f5f9; color: var(--text-main); outline: none; transition: 0.2s; }
        select:focus { border-color: var(--primary); }

        .btn { border: none; padding: 10px 20px; font-size: 16px; border-radius: 8px; cursor: pointer; transition: all 0.2s ease; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; }
        .btn-primary { background-color: var(--primary); color: white; }
        .btn-primary:hover { background-color: var(--primary-hover); transform: translateY(-1px); }
        .btn-success { background-color: var(--success); color: white; }
        .btn-success:hover { background-color: var(--success-hover); transform: translateY(-1px); }
        .btn-danger { background-color: var(--danger); color: white; }
        .btn-danger:hover { background-color: #c0392b; transform: translateY(-1px); }
        .btn-secondary { background-color: #94a3b8; color: white; }
        .btn-secondary:hover { background-color: #64748b; transform: translateY(-1px); }
        .btn-outline { background-color: transparent; border: 2px solid var(--border-color); color: var(--text-muted); }
        .btn-outline:hover { background-color: #f1f5f9; color: var(--text-main); }

        .tabs { display: flex; justify-content: center; gap: 12px; margin-bottom: 25px; flex-wrap: wrap; }
        .tab-btn { background-color: var(--card-bg); border: 1px solid var(--border-color); padding: 12px 25px; font-size: 16px; font-weight: bold; border-radius: 12px; cursor: pointer; transition: 0.3s; color: var(--text-muted); }
        .tab-btn.active { background-color: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3); }
        .mode-container { display: none; }
        .mode-container.active { display: block; }

        .study-plan-box { background-image: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%); text-align: center; }
        .study-plan-box input[type="number"] { width: 60px; font-size: 18px; padding: 6px; text-align: center; border: 2px solid #cbd5e1; border-radius: 8px; margin: 0 8px; }
        .plan-result { margin-top: 20px; font-size: 17px; color: var(--text-main); line-height: 1.8; background: rgba(255,255,255,0.6); padding: 15px; border-radius: 12px; }
        .tag-new { color: #c0392b; background: #fadbd8; padding: 4px 10px; border-radius: 6px; font-weight: bold; }
        .tag-review { color: #2980b9; background: #d4eaf2; padding: 4px 10px; border-radius: 6px; font-weight: bold; }

        .list-header-controls { display: flex; justify-content: flex-end; gap: 10px; margin-bottom: 15px; }
        .list-group-title { color: var(--success-hover); margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 15px; font-size: 20px; display: flex; align-items: center; }
        .list-group-title::before { content: ''; display: inline-block; width: 6px; height: 24px; background-color: var(--success); margin-right: 10px; border-radius: 4px; }
        .list-table { width: 100%; border-collapse: collapse; }
        .list-table td { padding: 15px 10px; border-bottom: 1px solid var(--border-color); vertical-align: middle; }
        .list-table tr:last-child td { border-bottom: none; }
        .zh-cell { font-weight: bold; width: 25%; color: var(--text-main); font-size: 16px; }
        .zh-text { transition: filter 0.3s ease, opacity 0.3s ease; }
        .hide-meaning .zh-text { filter: blur(6px); opacity: 0.6; cursor: pointer; user-select: none; }
        .hide-meaning .zh-text:hover, .hide-meaning .zh-text:active { filter: blur(0); opacity: 1; }
        .en-cell { width: 75%; line-height: 2; }
        .en-word-pill { display: inline-block; background-color: #f1f5f9; color: var(--primary-hover); padding: 6px 14px; margin: 4px; border-radius: 20px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.2s; border: 1px solid #cbd5e1; }
        .en-word-pill:hover { background-color: var(--primary); color: white; border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3); }

        .detail-row { display: flex; align-items: center; margin: 8px 0; padding: 4px 8px; border-radius: 8px; transition: background 0.2s; }
        .detail-row:hover { background-color: #f8fafc; }
        .pos-text { color: #d35400; font-weight: 700; font-size: 14px; margin-left: 12px; min-width: 45px; }
        .orig-text { color: #607d8b; font-size: 15px; margin-left: 5px; }

        #quiz-mode { max-width: 650px; margin: 0 auto; text-align: center; }
        .checkbox-group { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin: 20px 0; }
        .checkbox-label { font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; background: #f8fafc; padding: 10px 16px; border: 1px solid var(--border-color); border-radius: 8px; transition: 0.2s; }
        .checkbox-label:hover { background: #f1f5f9; }
        .word-display { font-size: 42px; font-weight: 800; color: var(--text-main); margin: 10px 0 20px 0; cursor: pointer; transition: color 0.2s; }
        .word-display:hover { color: var(--primary); }
        .options { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 15px; }
        .option-btn { background-color: #f8fafc; border: 2px solid var(--border-color); padding: 16px; font-size: 18px; border-radius: 12px; cursor: pointer; transition: all 0.2s; font-weight: 500; color: var(--text-main); }
        .option-btn:hover:not(:disabled) { background-color: #f1f5f9; border-color: #cbd5e1; }
        .option-btn:disabled { cursor: not-allowed; }
        .correct { background-color: var(--success) !important; border-color: var(--success-hover) !important; color: white !important; }
        .incorrect { background-color: var(--danger) !important; border-color: #c0392b !important; color: white !important; }
        .status { margin-top: 20px; font-size: 18px; font-weight: bold; min-height: 28px; }
        .score-display { margin-bottom: 15px; font-size: 16px; color: var(--text-muted); font-weight: 600; }

        .timer-container { width: 100%; height: 12px; background-color: #e2e8f0; border-radius: 6px; margin-bottom: 20px; overflow: hidden; display: none; }
        .timer-bar { height: 100%; width: 100%; background-color: var(--primary); transition: width 1s linear, background-color 0.5s ease; }

        .mistake-item { background: #fff; border: 1px solid var(--border-color); border-left: 4px solid var(--danger); padding: 12px 15px; margin-bottom: 10px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
        .mistake-word { font-size: 20px; font-weight: bold; color: var(--text-main); cursor: pointer; transition: 0.2s; }
        .mistake-word:hover { color: var(--primary); }
    </style>
</head>
<body>

<div class="container">
    <h1>多益考點字系統</h1>
    
    <div class="glass-card global-settings">
        <label for="voice-select" style="font-weight: 600;">發音引擎：</label>
        <select id="voice-select"><option value="">載入語音中...</option></select>
        <button class="btn btn-outline" style="padding: 8px 12px;" onclick="testVoice()" title="測試語音">測試發音</button>
    </div>

    <div class="tabs">
        <button class="tab-btn active" id="tab-list" onclick="switchTab('list')">讀書計畫與一覽</button>
        <button class="tab-btn" id="tab-quiz" onclick="switchTab('quiz')">自訂範圍測驗</button>
        <button class="tab-btn" id="tab-mistakes" onclick="switchTab('mistakes')">錯字本</button>
    </div>

    <div id="list-mode" class="mode-container active">
        <div class="glass-card study-plan-box">
            <label style="font-size: 18px; font-weight: 600; color: var(--text-main);">
                請輸入目前的讀書天數：第 <input type="number" id="study-day" min="1" max="30" value="1"> 天
            </label>
            <div style="margin-top: 15px; display: flex; justify-content: center; gap: 10px;">
                <button class="btn btn-primary" onclick="generatePlan()">產生今日計畫</button>
                <button class="btn btn-secondary" onclick="showAllGroups()">顯示全部字表</button>
            </div>
            <div id="plan-result" class="plan-result"></div>
            <div style="margin-top: 20px;">
                <button id="btn-plan-quiz" class="btn btn-success" style="display:none; font-size: 18px; padding: 12px 30px;" onclick="startPlanQuiz()">測驗今日範圍</button>
            </div>
        </div>
        
        <div class="list-header-controls" id="list-controls" style="display: none;">
            <button class="btn btn-outline" id="toggle-details-btn" onclick="toggleDetails()">顯示詞性與原義</button>
            <button class="btn btn-outline" id="toggle-zh-btn" onclick="toggleMeaning()">隱藏中文意思</button>
        </div>

        <div id="list-container"></div>
    </div>

    <div id="quiz-mode" class="mode-container">
        <div id="quiz-setup" class="glass-card">
            <h3 style="margin-top: 0; color: var(--text-main); text-align: center;">手動選擇測驗範圍</h3>
            <div class="checkbox-group" id="range-checkboxes"></div>
            <div style="text-align: center;">
                <button class="btn btn-success" style="font-size: 18px; padding: 12px 40px;" onclick="startCustomQuiz()">開始測驗</button>
            </div>
        </div>

        <div id="quiz-active" class="glass-card" style="display: none;">
            <div class="score-display" id="progress">題數: 1 / 10 &nbsp;|&nbsp; 分數: 0</div>
            <div class="timer-container" id="timer-container"><div class="timer-bar" id="timer-bar"></div></div>
            <div class="word-display" id="current-word" onclick="speakCurrentWord()" title="點擊發音">Word</div>
            <div style="font-size: 14px; color: var(--text-muted); margin-bottom: 20px;">(點擊單字可聆聽發音)</div>
            <div class="options" id="options-container"></div>
            <div class="status" id="status-text"></div>
            <div style="margin-top: 25px; display: flex; justify-content: center; gap: 15px;">
                <button class="btn btn-secondary" onclick="resetQuizSetup()">中途放棄</button>
                <button class="btn btn-primary" id="next-btn" style="display: none;" onclick="nextQuestion()">下一題</button>
            </div>
        </div>

        <div id="quiz-result" class="glass-card" style="display: none; text-align: center;">
            <h2 style="color: var(--text-main);">測驗結算</h2>
            <div id="final-score" style="font-size: 32px; font-weight: bold; color: var(--primary); margin: 20px 0;"></div>
            
            <div id="round-mistakes-container" style="text-align: left; margin: 30px auto; max-width: 500px;">
                </div>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
                <button class="btn btn-secondary" onclick="resetQuizSetup()">完成並返回</button>
                <button class="btn btn-primary" onclick="switchTab('mistakes')">前往錯字本</button>
            </div>
        </div>
    </div>

    <div id="mistakes-mode" class="mode-container">
        <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                <h2 style="margin: 0; color: var(--text-main);">📖 我的錯字本</h2>
                <div>
                    <button class="btn btn-primary" onclick="startMistakesQuiz()" id="btn-mistake-quiz">針對錯字測驗</button>
                    <button class="btn btn-outline" onclick="clearMistakes()">清空錯字</button>
                </div>
            </div>
            <div id="mistakes-list-container"></div>
        </div>
    </div>

</div>

<script>
    // --- 完整字典資料庫 ---
    const dictionaryData = [
        {group: "整理1", zh: "發票、收據", en: ["invoice", "receipt", "bill", "documentation"]},
        {group: "整理1", zh: "折抵、折扣", en: ["reimburse", "redeem", "waive", "refund"]},
        {group: "整理1", zh: "折扣、優惠", en: ["rebate", "markdown", "discount", "discount"]},
        {group: "整理1", zh: "會計、簿記", en: ["spreadsheet", "ledger", "bookkeeping", "accounting"]},
        {group: "整理1", zh: "露臺、陽台", en: ["patio", "terrace", "balcony", "outdoor space"]},
        {group: "整理1", zh: "遮雨棚、庇護所", en: ["awning", "shelter", "tent", "coverage"]},
        {group: "整理1", zh: "數據、數字", en: ["data", "facts", "statistics", "figure"]},
        {group: "整理2", zh: "快遞、運送", en: ["shipping", "delivery", "courier", "logistics"]},
        {group: "整理2", zh: "打卡、報到", en: ["check in", "sign in", "punch in", "timesheet"]},
        {group: "整理2", zh: "衣服", en: ["garment", "attire", "apparel", "clothes"]},
        {group: "整理2", zh: "布料", en: ["textile", "fabric", "material", "cloth"]},
        {group: "整理2", zh: "衣服、成衣", en: ["clothes", "clothing", "costume", "retailer"]},
        {group: "整理2", zh: "購買、採購", en: ["purchase", "procure", "acquire", "buy"]},
        {group: "整理2", zh: "附上、附件", en: ["attach", "enclose", "accompany with", "send along with"]},
        {group: "整理3", zh: "報名、註冊、投保", en: ["enroll", "register", "cover", "sign up for"]},
        {group: "整理3", zh: "招募、招聘", en: ["enroll", "enlist", "recruit", "hire"]},
        {group: "整理3", zh: "教育訓練", en: ["session", "orientation", "drill", "training"]},
        {group: "整理3", zh: "廣告", en: ["advertisement", "ad", "commercial", "advertising"]},
        {group: "整理3", zh: "專家", en: ["expert", "savvy", "specialist", "professional"]},
        {group: "整理3", zh: "更動、更改", en: ["alter", "amend", "modify", "change"]},
        {group: "整理3", zh: "更動、更改(名詞)", en: ["alteration", "amendment", "modification", "change"]},
        {group: "整理4", zh: "圖表、插圖", en: ["graphics", "visuals", "illustrations", "pictures"]},
        {group: "整理4", zh: "現有的", en: ["current", "existing", "prevailing", "present"]},
        {group: "整理4", zh: "損壞的", en: ["damaged", "defective", "impaired", "imperfect"]},
        {group: "整理4", zh: "檢查、檢驗", en: ["checkup", "inspection", "examination", "test"]},
        {group: "整理4", zh: "潛在的", en: ["prospective", "potential", "possible", "future"]},
        {group: "整理4", zh: "先進的", en: ["state-of-the-art", "up-to-date", "avant-garde", "advanced"]},
        {group: "整理4", zh: "選擇、抉擇", en: ["opt", "select", "elect", "choose"]},
        {group: "整理5", zh: "詢問、諮詢", en: ["inquire", "query", "consult", "ask"]},
        {group: "整理5", zh: "要求、請求", en: ["request", "requirement", "demand", "inquiry"]},
        {group: "整理5", zh: "商品、物品", en: ["merchandise", "item", "property", "goods"]},
        {group: "整理5", zh: "條列、細數", en: ["itemize", "enumerate", "sum up", "count"]},
        {group: "整理5", zh: "提交、交出", en: ["hand in", "put in", "turn in", "submit"]},
        {group: "整理5", zh: "障礙、困難", en: ["obstacle", "impediment", "hurdle", "difficulty"]},
        {group: "整理5", zh: "預先、提早", en: ["in advance", "ahead of time", "beforehand", "reservation"]},
        {group: "整理6", zh: "同意、允許", en: ["approval", "permission", "consent", "agreement"]},
        {group: "整理6", zh: "箱子、包裹", en: ["box", "carton", "package", "cardboard"]},
        {group: "整理6", zh: "津貼、補助金", en: ["subsidy", "allowance", "grant", "financial aid"]},
        {group: "整理6", zh: "缺點、短處", en: ["drawback", "disadvantage", "shortcoming", "weakness"]},
        {group: "整理6", zh: "展示、展演", en: ["demonstration", "display", "exhibit(ion)", "showcase"]},
        {group: "整理6", zh: "量身打造的", en: ["personalized", "tailor-made", "individualized", "customized"]},
        {group: "整理6", zh: "有資格", en: ["eligible", "entitled", "qualified", "allowed"]},
        {group: "整理7", zh: "旅遊、旅行", en: ["excursion", "traveling", "journey", "trip"]},
        {group: "整理7", zh: "演講", en: ["presentation", "speech", "address", "talk"]},
        {group: "整理7", zh: "點心、甜點", en: ["refreshment", "dessert", "snack", "sweets"]},
        {group: "整理7", zh: "薪水、薪資", en: ["remuneration", "salary", "compensation", "paycheck"]},
        {group: "整理7", zh: "翻修、更新", en: ["renovate", "remodel", "refurbish", "restore"]},
        {group: "整理7", zh: "應徵者、求職者", en: ["applicant", "candidate", "job hunter", "job seeker"]},
        {group: "整理7", zh: "經濟蕭條", en: ["depression", "recession", "downturn", "slump"]},
        {group: "整理8", zh: "傑出卓越的", en: ["prominent", "eminent", "distinguished", "outstanding"]},
        {group: "整理8", zh: "休閒、娛樂", en: ["recreation", "entertainment", "amusement", "pastime"]},
        {group: "整理8", zh: "繁榮茂盛的", en: ["prosperous", "thriving", "flourishing", "booming"]},
        {group: "整理8", zh: "停電、斷電", en: ["power outage", "power failure", "blackout", "out of service"]},
        {group: "整理8", zh: "遵守、遵照", en: ["comply with", "conform to", "abide by", "follow"]},
        {group: "整理8", zh: "評估、評鑑", en: ["assessment", "appraisal", "evaluation", "test"]},
        {group: "整理8", zh: "實施、執行", en: ["implement", "enforce", "impose", "put ...into practice"]},
        {group: "整理9", zh: "設備、場所", en: ["equipment", "factory", "hospital", "facility"]},
        {group: "整理9", zh: "房產、物品", en: ["house", "goods", "asset", "property"]},
        {group: "整理9", zh: "審查、瀏覽", en: ["evaluation", "audit", "browse", "review"]},
        {group: "整理9", zh: "入場、入學", en: ["entrance", "acceptance", "certification", "admission"]},
        {group: "整理9", zh: "餘款、均衡", en: ["harmony", "equivalence", "proportion", "balance"]},
        {group: "整理9", zh: "1/4、一季", en: ["one-fourth", "three months", "living space", "quarter"]},
        {group: "整理9", zh: "職缺、空房", en: ["job", "available room", "void", "vacancy"]}
    ];

    const wordDetailsMap = {
        "invoice": { pos: "n.", orig: "發票、費用清單" }, "receipt": { pos: "n.", orig: "收據" }, "bill": { pos: "n.", orig: "帳單" }, "documentation": { pos: "n.", orig: "文件證明、紀錄" },
        "reimburse": { pos: "v.", orig: "核銷、報帳、補償" }, "redeem": { pos: "v.", orig: "兌換、贖回" }, "waive": { pos: "v.", orig: "放棄、免除(規定等)" }, "refund": { pos: "n./v.", orig: "退款" },
        "rebate": { pos: "n.", orig: "部分退款、折扣" }, "markdown": { pos: "n.", orig: "降價" }, "discount": { pos: "n./v.", orig: "折扣" }, "spreadsheet": { pos: "n.", orig: "電子試算表" },
        "ledger": { pos: "n.", orig: "分類帳簿" }, "bookkeeping": { pos: "n.", orig: "簿記" }, "accounting": { pos: "n.", orig: "會計" }, "patio": { pos: "n.", orig: "露臺、院子" },
        "terrace": { pos: "n.", orig: "梯田、陽台" }, "balcony": { pos: "n.", orig: "(懸空的)陽台" }, "outdoor space": { pos: "n.", orig: "戶外空間" }, "awning": { pos: "n.", orig: "遮雨棚、遮陽篷" },
        "shelter": { pos: "n.", orig: "庇護所、避難所" }, "tent": { pos: "n.", orig: "帳篷" }, "coverage": { pos: "n.", orig: "保險範圍、新聞報導" }, "data": { pos: "n.", orig: "數據、資料" },
        "facts": { pos: "n.", orig: "事實" }, "statistics": { pos: "n.", orig: "統計學、統計數據" }, "figure": { pos: "n.", orig: "數字、圖表、人物" }, "shipping": { pos: "n.", orig: "運輸、配送" },
        "delivery": { pos: "n.", orig: "遞送、交付" }, "courier": { pos: "n.", orig: "快遞員、快遞公司" }, "logistics": { pos: "n.", orig: "物流、後勤" }, "check in": { pos: "v.", orig: "報到、登記" },
        "sign in": { pos: "v.", orig: "登入、簽到" }, "punch in": { pos: "v.", orig: "打卡上班" }, "timesheet": { pos: "n.", orig: "工時記錄表" }, "garment": { pos: "n.", orig: "(一件)衣服" },
        "attire": { pos: "n.", orig: "服裝、衣著(正式)" }, "apparel": { pos: "n.", orig: "服飾、衣服(總稱)" }, "clothes": { pos: "n.", orig: "衣服(複數)" }, "textile": { pos: "n.", orig: "紡織品" },
        "fabric": { pos: "n.", orig: "布料、織物" }, "material": { pos: "n.", orig: "材料、原料" }, "cloth": { pos: "n.", orig: "布、織物" }, "clothing": { pos: "n.", orig: "衣服(總稱)" },
        "costume": { pos: "n.", orig: "戲服、特殊服裝" }, "retailer": { pos: "n.", orig: "零售商" }, "purchase": { pos: "v./n.", orig: "購買" }, "procure": { pos: "v.", orig: "採購、獲得" },
        "acquire": { pos: "v.", orig: "取得、收購" }, "buy": { pos: "v.", orig: "購買" }, "attach": { pos: "v.", orig: "附加、繫上" }, "enclose": { pos: "v.", orig: "隨信附上、封入" },
        "accompany with": { pos: "v. phr.", orig: "伴隨、連同" }, "send along with": { pos: "v. phr.", orig: "連同...一起發送" }, "enroll": { pos: "v.", orig: "註冊、報名" }, "register": { pos: "v.", orig: "登記、註冊" },
        "cover": { pos: "v.", orig: "覆蓋、報導、投保" }, "sign up for": { pos: "v. phr.", orig: "報名參加" }, "enlist": { pos: "v.", orig: "徵募、入伍" }, "recruit": { pos: "v.", orig: "招募" },
        "hire": { pos: "v.", orig: "雇用" }, "session": { pos: "n.", orig: "會議、培訓會" }, "orientation": { pos: "n.", orig: "新生/就職訓練、方向" }, "drill": { pos: "n./v.", orig: "演習、訓練、鑽孔" },
        "training": { pos: "n.", orig: "訓練" }, "advertisement": { pos: "n.", orig: "廣告" }, "ad": { pos: "n.", orig: "廣告(縮寫)" }, "commercial": { pos: "n./adj.", orig: "電視/廣播廣告 / 商業的" },
        "advertising": { pos: "n.", orig: "廣告業、廣告活動" }, "expert": { pos: "n.", orig: "專家" }, "savvy": { pos: "adj./n.", orig: "精明的 / 常識" }, "specialist": { pos: "n.", orig: "專家" },
        "professional": { pos: "n./adj.", orig: "專業人士 / 專業的" }, "alter": { pos: "v.", orig: "改變、修改" }, "amend": { pos: "v.", orig: "修訂(文件等)" }, "modify": { pos: "v.", orig: "稍微修改、修飾" },
        "change": { pos: "v./n.", orig: "改變、零錢" }, "alteration": { pos: "n.", orig: "修改、改變" }, "amendment": { pos: "n.", orig: "修正案、改正" }, "modification": { pos: "n.", orig: "修改、變更" },
        "graphics": { pos: "n.", orig: "圖表、圖像" }, "visuals": { pos: "n.", orig: "視覺資料、圖像" }, "illustrations": { pos: "n.", orig: "插圖、圖解" }, "pictures": { pos: "n.", orig: "圖片、照片" },
        "current": { pos: "adj.", orig: "目前的、現在的" }, "existing": { pos: "adj.", orig: "現存的、現有的" }, "prevailing": { pos: "adj.", orig: "普遍的、盛行的" }, "present": { pos: "adj./n.", orig: "出席的、現在的 / 禮物" },
        "damaged": { pos: "adj.", orig: "受損的" }, "defective": { pos: "adj.", orig: "有缺陷的" }, "impaired": { pos: "adj.", orig: "受損的、有障礙的" }, "imperfect": { pos: "adj.", orig: "不完美的" },
        "checkup": { pos: "n.", orig: "身體檢查" }, "inspection": { pos: "n.", orig: "視察、檢驗" }, "examination": { pos: "n.", orig: "檢查、考試" }, "test": { pos: "n.", orig: "測驗、檢驗" },
        "prospective": { pos: "adj.", orig: "潛在的、預期的" }, "potential": { pos: "adj./n.", orig: "潛在的 / 潛力" }, "possible": { pos: "adj.", orig: "可能的" }, "future": { pos: "adj./n.", orig: "未來的 / 未來" },
        "state-of-the-art": { pos: "adj.", orig: "最先進的" }, "up-to-date": { pos: "adj.", orig: "最新式的、最新的" }, "avant-garde": { pos: "adj.", orig: "前衛的" }, "advanced": { pos: "adj.", orig: "先進的、高級的" },
        "opt": { pos: "v.", orig: "選擇" }, "select": { pos: "v.", orig: "挑選" }, "elect": { pos: "v.", orig: "選舉、選擇" }, "choose": { pos: "v.", orig: "選擇" },
        "inquire": { pos: "v.", orig: "詢問" }, "query": { pos: "n./v.", orig: "疑問 / 質詢" }, "consult": { pos: "v.", orig: "諮詢、查閱" }, "ask": { pos: "v.", orig: "詢問、要求" },
        "request": { pos: "n./v.", orig: "要求、請求" }, "requirement": { pos: "n.", orig: "必備條件、要求" }, "demand": { pos: "n./v.", orig: "需求、要求" }, "inquiry": { pos: "n.", orig: "詢問、調查" },
        "merchandise": { pos: "n.", orig: "商品(不可數)" }, "item": { pos: "n.", orig: "項目、物品" }, "property": { pos: "n.", orig: "財產、房地產" }, "goods": { pos: "n.", orig: "貨物" },
        "itemize": { pos: "v.", orig: "逐條列記" }, "enumerate": { pos: "v.", orig: "列舉" }, "sum up": { pos: "v. phr.", orig: "總結" }, "count": { pos: "v.", orig: "計算、數" },
        "hand in": { pos: "v. phr.", orig: "繳交" }, "put in": { pos: "v. phr.", orig: "投入、提交" }, "turn in": { pos: "v. phr.", orig: "繳交、就寢" }, "submit": { pos: "v.", orig: "提交、屈服" },
        "obstacle": { pos: "n.", orig: "障礙" }, "impediment": { pos: "n.", orig: "妨礙、阻礙" }, "hurdle": { pos: "n.", orig: "跨欄、障礙" }, "difficulty": { pos: "n.", orig: "困難" },
        "in advance": { pos: "adv. phr.", orig: "事先" }, "ahead of time": { pos: "adv. phr.", orig: "提前" }, "beforehand": { pos: "adv.", orig: "事先、預先" }, "reservation": { pos: "n.", orig: "預約、保留意見" },
        "approval": { pos: "n.", orig: "批准、贊成" }, "permission": { pos: "n.", orig: "許可、允許" }, "consent": { pos: "n./v.", orig: "同意" }, "agreement": { pos: "n.", orig: "協議、同意" },
        "box": { pos: "n.", orig: "箱子" }, "carton": { pos: "n.", orig: "紙板箱" }, "package": { pos: "n.", orig: "包裹、套裝方案" }, "cardboard": { pos: "n.", orig: "厚紙板" },
        "subsidy": { pos: "n.", orig: "補貼、津貼" }, "allowance": { pos: "n.", orig: "零用錢、津貼" }, "grant": { pos: "n.", orig: "補助金、撥款" }, "financial aid": { pos: "n. phr.", orig: "財務援助" },
        "drawback": { pos: "n.", orig: "缺點" }, "disadvantage": { pos: "n.", orig: "劣勢、缺點" }, "shortcoming": { pos: "n.", orig: "短處、缺點" }, "weakness": { pos: "n.", orig: "弱點" },
        "demonstration": { pos: "n.", orig: "示範、示威" }, "display": { pos: "n./v.", orig: "展示、陳列" }, "exhibit(ion)": { pos: "n.", orig: "展覽" }, "showcase": { pos: "n./v.", orig: "展示櫃 / 充分展示" },
        "personalized": { pos: "adj.", orig: "個人化的" }, "tailor-made": { pos: "adj.", orig: "量身定制的" }, "individualized": { pos: "adj.", orig: "個別化的" }, "customized": { pos: "adj.", orig: "客製化的" },
        "eligible": { pos: "adj.", orig: "有資格的" }, "entitled": { pos: "adj.", orig: "有權利的" }, "qualified": { pos: "adj.", orig: "合格的" }, "allowed": { pos: "adj.", orig: "被允許的" },
        "excursion": { pos: "n.", orig: "短途旅行" }, "traveling": { pos: "n./adj.", orig: "旅行" }, "journey": { pos: "n.", orig: "旅程" }, "trip": { pos: "n.", orig: "旅行、行程" },
        "presentation": { pos: "n.", orig: "簡報、呈現" }, "speech": { pos: "n.", orig: "演講" }, "address": { pos: "n./v.", orig: "地址 / 發表演說、處理" }, "talk": { pos: "n./v.", orig: "談話、演講" },
        "refreshment": { pos: "n.", orig: "茶點" }, "dessert": { pos: "n.", orig: "甜點" }, "snack": { pos: "n.", orig: "零食" }, "sweets": { pos: "n.", orig: "糖果、甜食" },
        "remuneration": { pos: "n.", orig: "報酬、酬勞" }, "salary": { pos: "n.", orig: "薪水" }, "compensation": { pos: "n.", orig: "補償、報酬" }, "paycheck": { pos: "n.", orig: "薪資支票、薪水" },
        "renovate": { pos: "v.", orig: "重新裝修" }, "remodel": { pos: "v.", orig: "改造、改變結構" }, "refurbish": { pos: "v.", orig: "翻修、刷新" }, "restore": { pos: "v.", orig: "恢復、修復" },
        "applicant": { pos: "n.", orig: "申請人" }, "candidate": { pos: "n.", orig: "候選人" }, "job hunter": { pos: "n.", orig: "求職者" }, "job seeker": { pos: "n.", orig: "求職者" },
        "depression": { pos: "n.", orig: "經濟蕭條、沮喪" }, "recession": { pos: "n.", orig: "經濟衰退" }, "downturn": { pos: "n.", orig: "(經濟)低迷" }, "slump": { pos: "n./v.", orig: "暴跌、不景氣" },
        "prominent": { pos: "adj.", orig: "突出的、顯著的" }, "eminent": { pos: "adj.", orig: "卓越的、著名的" }, "distinguished": { pos: "adj.", orig: "傑出的、著名的" }, "outstanding": { pos: "adj.", orig: "傑出的、未償付的" },
        "recreation": { pos: "n.", orig: "娛樂、休閒" }, "entertainment": { pos: "n.", orig: "娛樂(節目)" }, "amusement": { pos: "n.", orig: "樂趣、娛樂活動" }, "pastime": { pos: "n.", orig: "消遣" },
        "prosperous": { pos: "adj.", orig: "繁榮的" }, "thriving": { pos: "adj.", orig: "繁榮的、茁壯成長的" }, "flourishing": { pos: "adj.", orig: "繁茂的、興旺的" }, "booming": { pos: "adj.", orig: "急速發展的" },
        "power outage": { pos: "n. phr.", orig: "停電" }, "power failure": { pos: "n. phr.", orig: "電力故障" }, "blackout": { pos: "n.", orig: "停電、封鎖消息" }, "out of service": { pos: "phr.", orig: "暫停服務" },
        "comply with": { pos: "v. phr.", orig: "遵守" }, "conform to": { pos: "v. phr.", orig: "遵從、符合" }, "abide by": { pos: "v. phr.", orig: "遵守、信守" }, "follow": { pos: "v.", orig: "跟隨、遵守" },
        "assessment": { pos: "n.", orig: "評估" }, "appraisal": { pos: "n.", orig: "評價、估價" }, "evaluation": { pos: "n.", orig: "評量、審查" }, "implement": { pos: "v.", orig: "實施、執行" },
        "enforce": { pos: "v.", orig: "強制執行" }, "impose": { pos: "v.", orig: "強加、徵收" }, "put ...into practice": { pos: "v. phr.", orig: "將...付諸實行" },
        "equipment": { pos: "n.", orig: "設備(不可數)" }, "factory": { pos: "n.", orig: "工廠" }, "hospital": { pos: "n.", orig: "醫院" }, "facility": { pos: "n.", orig: "設施、場所" },
        "house": { pos: "n.", orig: "房屋" }, "asset": { pos: "n.", orig: "資產" }, "audit": { pos: "n./v.", orig: "審計、查帳" }, "browse": { pos: "v.", orig: "瀏覽" }, "review": { pos: "n./v.", orig: "評論、審查" },
        "entrance": { pos: "n.", orig: "入口、入學" }, "acceptance": { pos: "n.", orig: "接受、錄取" }, "certification": { pos: "n.", orig: "證明、認證" }, "admission": { pos: "n.", orig: "入場費、准許進入" },
        "harmony": { pos: "n.", orig: "和諧" }, "equivalence": { pos: "n.", orig: "相等、等值" }, "proportion": { pos: "n.", orig: "比例、部分" }, "balance": { pos: "n./v.", orig: "平衡、餘額" },
        "one-fourth": { pos: "n.", orig: "四分之一" }, "three months": { pos: "n. phr.", orig: "三個月" }, "living space": { pos: "n. phr.", orig: "居住空間" }, "quarter": { pos: "n.", orig: "四分之一、一季" },
        "job": { pos: "n.", orig: "工作" }, "available room": { pos: "n. phr.", orig: "空房" }, "void": { pos: "n./adj.", orig: "空白、無效的" }, "vacancy": { pos: "n.", orig: "空缺、空房" }
    };

    let fullWordPool = [];
    let fullUniqueMeanings = [];
    let currentQuizPool = [];
    let currentQuizMeanings = [];
    let activePlanGroups = [];
    let currentDisplayGroups = []; 
    
    // --- 錯字紀錄 ---
    let currentQuizMistakes = [];
    let globalMistakes = JSON.parse(localStorage.getItem('toeicMistakes') || '[]');

    dictionaryData.forEach(row => {
        const mKey = `${row.zh}|${row.group}`;
        if (!fullUniqueMeanings.find(m => m.key === mKey)) {
            fullUniqueMeanings.push({ key: mKey, zh: row.zh, group: row.group });
        }
        row.en.forEach(word => {
            fullWordPool.push({ word: word, key: mKey, zh: row.zh, group: row.group });
        });
    });

    // === 音效合成器 (Web Audio API) ===
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;

    function playCorrectSound() {
        if (!audioCtx) audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
        oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.1); 
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
    }

    // === 語音系統 ===
    let availableVoices = [];
    function populateVoiceList() {
        if(typeof speechSynthesis === 'undefined') return;
        let voices = speechSynthesis.getVoices();
        availableVoices = voices.filter(v => v.lang.startsWith('en'));
        availableVoices.sort((a, b) => {
            if (a.name.includes('Google') && !b.name.includes('Google')) return -1;
            if (!a.name.includes('Google') && b.name.includes('Google')) return 1;
            return 0;
        });
        availableVoices = availableVoices.slice(0, 8);
        const voiceSelect = document.getElementById('voice-select');
        voiceSelect.innerHTML = '';
        if(availableVoices.length === 0) {
            voiceSelect.innerHTML = '<option value="">系統預設語音</option>';
            return;
        }
        availableVoices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = index; option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    if (typeof speechSynthesis !== 'undefined') {
        speechSynthesis.onvoiceschanged = populateVoiceList; populateVoiceList();
    }

    function speakText(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const cleanText = text.replace(/\.\.\./g, '').replace(/\(ion\)/g, 'ion');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            const voiceSelect = document.getElementById('voice-select');
            if (voiceSelect.value !== "" && availableVoices[voiceSelect.value]) {
                utterance.voice = availableVoices[voiceSelect.value];
            } else { utterance.lang = 'en-US'; }
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }

    function testVoice() { speakText("Testing the English voice engine."); }
    function speakCurrentWord() { speakText(document.getElementById('current-word').innerText); }

    // === UI 切換 ===
    function switchTab(mode) {
        document.getElementById('quiz-mode').classList.toggle('active', mode === 'quiz');
        document.getElementById('list-mode').classList.toggle('active', mode === 'list');
        document.getElementById('mistakes-mode').classList.toggle('active', mode === 'mistakes');
        
        document.getElementById('tab-quiz').classList.toggle('active', mode === 'quiz');
        document.getElementById('tab-list').classList.toggle('active', mode === 'list');
        document.getElementById('tab-mistakes').classList.toggle('active', mode === 'mistakes');
        
        if(mode === 'quiz' && document.getElementById('range-checkboxes').innerHTML === '') {
            initSetupUI();
        }
        if(mode === 'mistakes') {
            renderMistakesList();
        }
        if(mode !== 'quiz') stopTimer();
    }

    let isMeaningHidden = false;
    function toggleMeaning() {
        const container = document.getElementById('list-container');
        const btn = document.getElementById('toggle-zh-btn');
        isMeaningHidden = !isMeaningHidden;
        if (isMeaningHidden) {
            container.classList.add('hide-meaning');
            btn.innerText = "顯示中文意思"; btn.classList.replace('btn-outline', 'btn-primary');
        } else {
            container.classList.remove('hide-meaning');
            btn.innerText = "隱藏中文意思"; btn.classList.replace('btn-primary', 'btn-outline');
        }
    }

    let isDetailsShown = false;
    function toggleDetails() {
        isDetailsShown = !isDetailsShown;
        const btn = document.getElementById('toggle-details-btn');
        if (isDetailsShown) {
            btn.innerText = "隱藏詞性與原義"; btn.classList.replace('btn-outline', 'btn-primary');
        } else {
            btn.innerText = "顯示詞性與原義"; btn.classList.replace('btn-primary', 'btn-outline');
        }
        renderListMode(currentDisplayGroups);
    }

    // === 讀書計畫邏輯 ===
    function generatePlan() {
        const day = parseInt(document.getElementById('study-day').value) || 1;
        let newGroups = []; let reviewGroups = [];
        if (day <= 9) newGroups.push(`整理${day}`);
        [1, 2, 4, 7].forEach(interval => {
            let pastDay = day - interval;
            if (pastDay > 0 && pastDay <= 9) reviewGroups.push(`整理${pastDay}`);
        });

        const resultDiv = document.getElementById('plan-result');
        let html = ''; activePlanGroups = [];
        html += newGroups.length > 0 ? `<div>📖 今日新進度： <span class="tag-new">${newGroups.join(', ')}</span></div>` : `<div>📖 今日新進度： <span style="color:var(--text-muted);">無 (已完成所有新範圍)</span></div>`;
        if (newGroups.length > 0) activePlanGroups.push(...newGroups);
        
        html += reviewGroups.length > 0 ? `<div style="margin-top:8px;">🔄 需複習範圍： <span class="tag-review">${reviewGroups.join(', ')}</span></div>` : `<div style="margin-top:8px;">🔄 需複習範圍： <span style="color:var(--text-muted);">無</span></div>`;
        if (reviewGroups.length > 0) activePlanGroups.push(...reviewGroups);

        resultDiv.innerHTML = html;
        if (activePlanGroups.length > 0) {
            document.getElementById('btn-plan-quiz').style.display = 'inline-block';
            document.getElementById('list-controls').style.display = 'flex';
            currentDisplayGroups = activePlanGroups; renderListMode(currentDisplayGroups);
        } else {
            document.getElementById('btn-plan-quiz').style.display = 'none';
            document.getElementById('list-controls').style.display = 'none';
            document.getElementById('list-container').innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:30px;">今天沒有排定的任務，您可以選擇「顯示全部字表」。</div>';
        }
    }

    function showAllGroups() {
        document.getElementById('plan-result').innerHTML = '<div style="color:var(--text-muted); text-align:center; font-weight:bold;">已顯示全部考點字表</div>';
        document.getElementById('btn-plan-quiz').style.display = 'none';
        document.getElementById('list-controls').style.display = 'flex';
        const allGroups = []; for (let i = 1; i <= 9; i++) allGroups.push(`整理${i}`);
        currentDisplayGroups = allGroups; renderListMode(currentDisplayGroups);
    }

    function renderListMode(groupsToShow) {
        const container = document.getElementById('list-container');
        container.innerHTML = '';
        groupsToShow.forEach(groupName => {
            const groupData = dictionaryData.filter(d => d.group === groupName);
            if (groupData.length === 0) return;
            const section = document.createElement('div'); section.className = 'glass-card';
            const title = document.createElement('h2'); title.className = 'list-group-title'; title.innerHTML = `${groupName}`;
            section.appendChild(title);
            const table = document.createElement('table'); table.className = 'list-table';
            groupData.forEach(row => {
                const tr = document.createElement('tr');
                let enWordsHTML = '';
                if (isDetailsShown) {
                    enWordsHTML = row.en.map(w => {
                        let detail = wordDetailsMap[w] || {pos: "", orig: ""};
                        return `<div class="detail-row" style="cursor:pointer;" onclick="speakText('${w}')"><span class="en-word-pill" style="margin:0;">${w}</span><span class="pos-text">${detail.pos}</span><span class="orig-text">${detail.orig}</span></div>`;
                    }).join('');
                } else {
                    enWordsHTML = row.en.map(w => `<span class="en-word-pill" onclick="speakText('${w}')">${w}</span>`).join(' ');
                }
                tr.innerHTML = `<td class="zh-cell"><div class="zh-text">${row.zh}</div></td><td class="en-cell">${enWordsHTML}</td>`;
                table.appendChild(tr);
            });
            section.appendChild(table); container.appendChild(section);
        });
    }

    // === 錯字本邏輯 ===
    function renderMistakesList() {
        const container = document.getElementById('mistakes-list-container');
        if (globalMistakes.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted); font-size: 18px;">目前沒有錯字，繼續保持！ 🎉</div>';
            document.getElementById('btn-mistake-quiz').style.display = 'none';
            return;
        }
        
        document.getElementById('btn-mistake-quiz').style.display = 'inline-flex';
        let html = '<div style="font-size: 14px; color: var(--text-muted); margin-bottom: 15px;">(點按英文單字可聆聽發音)</div>';
        
        globalMistakes.forEach((m, index) => {
            let detail = wordDetailsMap[m.word] || {pos: "", orig: ""};
            html += `
            <div class="mistake-item">
                <div>
                    <span class="mistake-word" onclick="speakText('${m.word}')">${m.word}</span>
                    <div style="color: var(--text-muted); font-size: 15px; margin-top: 4px;">
                        <span style="color: #d35400; font-weight:bold;">${detail.pos}</span> 
                        ${detail.orig} 
                        <span style="font-size:13px; color: #95a5a6;">（${m.zh}）</span>
                    </div>
                </div>
                <button class="btn btn-outline" style="padding: 6px 12px; font-size: 14px;" onclick="removeMistake(${index})">已熟記移除</button>
            </div>`;
        });
        container.innerHTML = html;
    }

    function removeMistake(index) {
        globalMistakes.splice(index, 1);
        localStorage.setItem('toeicMistakes', JSON.stringify(globalMistakes));
        renderMistakesList();
    }

    function clearMistakes() {
        if(confirm("確定要清空整本錯字本嗎？")) {
            globalMistakes = [];
            localStorage.setItem('toeicMistakes', JSON.stringify(globalMistakes));
            renderMistakesList();
        }
    }

    function recordMistake(word) {
        let wordData = fullWordPool.find(w => w.word === word);
        if(!wordData) return;
        
        if (!currentQuizMistakes.some(m => m.word === word)) {
            currentQuizMistakes.push({ word: word, zh: wordData.zh, group: wordData.group });
        }
        if (!globalMistakes.some(m => m.word === word)) {
            globalMistakes.push({ word: word, zh: wordData.zh, group: wordData.group });
            localStorage.setItem('toeicMistakes', JSON.stringify(globalMistakes));
        }
    }


    // === 測驗邏輯與計時器 ===
    function initSetupUI() {
        const checkboxContainer = document.getElementById('range-checkboxes');
        checkboxContainer.innerHTML = '';
        for(let i=1; i<=9; i++) {
            const label = document.createElement('label'); label.className = 'checkbox-label';
            label.innerHTML = `<input type="checkbox" value="整理${i}" checked> 整理${i}`;
            checkboxContainer.appendChild(label);
        }
    }

    function resetQuizSetup() {
        stopTimer();
        document.getElementById('quiz-result').style.display = "none";
        document.getElementById('quiz-active').style.display = "none";
        document.getElementById('quiz-setup').style.display = "block";
    }

    function startPlanQuiz() {
        if(activePlanGroups.length === 0) return;
        executeQuizLaunch(fullWordPool.filter(w => activePlanGroups.includes(w.group)));
        switchTab('quiz');
    }

    function startCustomQuiz() {
        const checkboxes = document.querySelectorAll('#range-checkboxes input:checked');
        const selectedGroups = Array.from(checkboxes).map(cb => cb.value);
        if (selectedGroups.length === 0) { alert("請至少選擇一個範圍！"); return; }
        executeQuizLaunch(fullWordPool.filter(w => selectedGroups.includes(w.group)));
    }
    
    function startMistakesQuiz() {
        if(globalMistakes.length === 0) return;
        let pool = [];
        globalMistakes.forEach(m => {
            let entry = fullWordPool.find(w => w.word === m.word);
            if(entry) pool.push(entry);
        });
        executeQuizLaunch(pool);
        switchTab('quiz');
    }

    let currentQuestion = 1; let score = 0; let totalQuestions = 10;
    let currentValidKeys = []; let timerInterval; const maxTime = 10; let timeLeft = maxTime;

    function executeQuizLaunch(wordPool) {
        currentQuizPool = wordPool;
        currentQuizMeanings = fullUniqueMeanings; 
        
        document.getElementById('quiz-setup').style.display = "none";
        document.getElementById('quiz-result').style.display = "none";
        document.getElementById('quiz-active').style.display = "block";
        
        currentQuizMistakes = [];
        totalQuestions = Math.min(10, currentQuizPool.length);
        currentQuestion = 1; score = 0;
        loadQuestion();
    }

    function loadQuestion() {
        document.getElementById('status-text').innerText = "";
        document.getElementById('next-btn').style.display = "none";
        document.getElementById('progress').innerText = `題數: ${currentQuestion} / ${totalQuestions}  |  分數: ${score}`;

        const target = currentQuizPool[Math.floor(Math.random() * currentQuizPool.length)];
        const targetWord = target.word;
        document.getElementById('current-word').innerText = targetWord;

        currentValidKeys = fullWordPool.filter(w => w.word === targetWord).map(w => w.key);
        let options = [currentQuizMeanings.find(m => m.key === target.key)];
        
        let distractors = currentQuizMeanings.filter(m => !currentValidKeys.includes(m.key));
        distractors.sort(() => 0.5 - Math.random());
        options.push(distractors[0], distractors[1], distractors[2]);
        options.sort(() => 0.5 - Math.random());

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button'); 
            btn.className = 'option-btn';
            
            // 選項只顯示中文，不顯示群組標籤
            btn.innerHTML = `${opt.zh}`; 
            btn.dataset.key = opt.key; // 將 key 藏在 dataset 供驗證使用
            
            btn.onclick = () => checkAnswer(btn, opt.key);
            optionsContainer.appendChild(btn);
        });

        speakCurrentWord();
        startTimer();
    }

    function startTimer() {
        clearInterval(timerInterval); timeLeft = maxTime;
        document.getElementById('timer-container').style.display = 'block';
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            timeLeft--; updateTimerDisplay();
            if (timeLeft <= 0) { clearInterval(timerInterval); handleTimeout(); }
        }, 1000);
    }

    function stopTimer() { clearInterval(timerInterval); }

    function updateTimerDisplay() {
        const bar = document.getElementById('timer-bar');
        bar.style.width = `${(timeLeft / maxTime) * 100}%`;
        if (timeLeft <= 3) bar.style.backgroundColor = 'var(--danger)';
        else if (timeLeft <= 6) bar.style.backgroundColor = '#f39c12';
        else bar.style.backgroundColor = 'var(--primary)';
    }

    function handleTimeout() {
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(btn => btn.disabled = true);
        
        let word = document.getElementById('current-word').innerText;
        recordMistake(word); 
        
        document.getElementById('status-text').innerText = "⏰ 時間到！綠色標示為正確解答。";
        document.getElementById('status-text').style.color = "var(--danger)";
        allBtns.forEach(btn => {
            if (currentValidKeys.includes(btn.dataset.key)) {
                btn.classList.add('correct');
            }
        });
        showNextButton();
    }

    function checkAnswer(selectedBtn, selectedKey) {
        stopTimer();
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(btn => btn.disabled = true);
        let word = document.getElementById('current-word').innerText;

        if (currentValidKeys.includes(selectedKey)) {
            playCorrectSound();
            selectedBtn.classList.add('correct');
            document.getElementById('status-text').innerText = "✅ 答對了！";
            document.getElementById('status-text').style.color = "var(--success)";
            score += Math.round(100 / totalQuestions); 
        } else {
            recordMistake(word);
            selectedBtn.classList.add('incorrect');
            document.getElementById('status-text').innerText = "❌ 答錯了！綠色標示為正確解答。";
            document.getElementById('status-text').style.color = "var(--danger)";
            allBtns.forEach(btn => {
                if (currentValidKeys.includes(btn.dataset.key)) {
                    btn.classList.add('correct');
                }
            });
        }
        document.getElementById('progress').innerText = `題數: ${currentQuestion} / ${totalQuestions}  |  分數: ${score}`;
        showNextButton();
    }
    
    function showNextButton() {
        document.getElementById('next-btn').style.display = "inline-flex";
        if (currentQuestion >= totalQuestions) document.getElementById('next-btn').innerText = "看結算結果";
    }

    function nextQuestion() {
        if (currentQuestion >= totalQuestions) {
            showQuizResult();
        } else {
            currentQuestion++;
            loadQuestion();
            document.getElementById('next-btn').innerText = "下一題";
        }
    }
    
    // --- 結算畫面顯示 ---
    function showQuizResult() {
        document.getElementById('quiz-active').style.display = "none";
        document.getElementById('quiz-result').style.display = "block";
        document.getElementById('timer-container').style.display = 'none';
        
        document.getElementById('final-score').innerText = `得分: ${score} / 100`;
        
        let container = document.getElementById('round-mistakes-container');
        if (currentQuizMistakes.length === 0) {
            container.innerHTML = '<div style="color: var(--success); font-size: 22px; font-weight: bold;">🎉 太厲害了！全對零失誤！</div>';
        } else {
            let html = '<h3 style="color: var(--danger); border-bottom: 2px solid #eee; padding-bottom: 10px;">⚠️ 本回合錯字整理</h3>';
            html += '<div style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px;">(點按英文單字可聆聽發音)</div>';
            currentQuizMistakes.forEach(m => {
                let detail = wordDetailsMap[m.word] || {pos: "", orig: ""};
                html += `
                <div style="padding: 10px 0; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 18px; font-weight: bold; color: var(--text-main); cursor: pointer;" onclick="speakText('${m.word}')">${m.word}</span>
                    <span style="color: var(--text-muted);">
                        <span style="color: #d35400; font-weight:bold; font-size: 14px;">${detail.pos}</span> 
                        ${detail.orig} 
                        <span style="font-size:12px; color: #95a5a6;">（${m.zh}）</span>
                    </span>
                </div>`;
            });
            html += '<div style="margin-top: 15px; font-size: 14px; color: var(--text-muted);">*這些單字已自動加入您的「錯字本」中。</div>';
            container.innerHTML = html;
        }
    }

    // 啟動
    generatePlan();
</script>

</body>
</html>
