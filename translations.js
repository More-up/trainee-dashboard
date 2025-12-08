// 質問タイプの定義（グローバル）
const questionTypes = {
    q1: 'satisfaction',
    q2: 'satisfaction',
    q3: 'satisfaction',
    q4: 'satisfaction',
    q5: 'satisfaction',
    q6: 'satisfaction',
    q7: 'satisfaction',
    q8: 'satisfaction',
    q9: 'satisfaction',
    q10: 'availability',
    q11: 'satisfaction',
    q12: 'desire',
    q13: 'satisfaction',
    q14: 'satisfaction',
    q15: 'availability',
    q16: 'negative',
    q17: 'negative',
    q18: 'understanding',
    q19: 'satisfaction',
    q20: 'availability',
    q21: 'availability',
    q22: 'familiarity',
    q23: 'negative',
    q24: 'satisfaction',
    q25: 'satisfaction',
    q26: 'negative',
    q27: 'availability',
    q28: 'satisfaction',
    q29: 'satisfaction',
    q30: 'desire',
    q31: 'desire',
    q32: 'desire',
    q33: 'availability',
    q34: 'desire',
    q35: 'satisfaction'
};

// 翻訳データ
const translations = {
    ja: {
        title: '技能実習生エンゲージメント診断',
        privacyNotice: 'お名前は記録されません。安心して正直にお答えください。',
        employeeCode: '社員番号',
        nationality: '国籍',
        selectNationality: '選択してください',
        startButton: 'アンケート開始',
        completionTime: '所要時間: 約5〜10分',
        completionTitle: '✓ 完了しました',
        completionMessage: 'ご協力ありがとうございました。\n5秒後に自動的に最初の画面に戻ります。',
        freeTextPlaceholder: 'ご自由にお書きください',
        errorEmployeeCode: '社員番号を選択してください',
        errorNationality: '国籍を選択してください',
        errorIncomplete: 'すべての質問に回答してください',
        progressText: '質問',
        nationalities: {
            vn: 'ベトナム', kh: 'カンボジア', in: 'インド', ph: 'フィリピン', la: 'ラオス',
            mn: 'モンゴル', bd: 'バングラデシュ', lk: 'スリランカ', mm: 'ミャンマー',
            bt: 'ブータン', uz: 'ウズベキスタン', pk: 'パキスタン', th: 'タイ',
            id: 'インドネシア', np: 'ネパール', cn: '中国', jp: '日本'
        },
        categories: {
            workplace: '業務・職場環境',
            compensation: '給与・待遇',
            family: '家族・プライベート事情',
            relationship: '人間関係',
            communication: '日本語・コミュニケーション',
            culture: '文化・価値観',
            living: '生活環境',
            career: 'キャリア・将来の見通し'
        },
        questions: {
            q1: '仕事の内容は、自分に合っていますか?',
            q2: '働く場所は、安全だと思いますか?',
            q3: '休みの日や働く時間は、ちょうどよいですか?',
            q4: '職場の雰囲気は、働きやすいですか?',
            q5: '給料の金額に、満足していますか?',
            q6: '残業代や手当は、きちんと受け取れていますか?',
            q7: '保険や休暇などの制度は、十分だと思いますか?',
            q8: 'この会社で働くことで、生活に必要なお金を得られていますか?',
            q9: '家族と連絡をとる時間は、十分にありますか?',
            q10: '家族に送金する余裕はありますか?',
            q11: '自分の時間(休みやプライベート)は、十分にありますか?',
            q12: '将来、家族を日本に呼びたいと思いますか?',
            q13: '同じ技能実習生の仲間との関係は良いですか?',
            q14: '日本人の上司や同僚は、あなたの話を聞いてくれますか?',
            q15: '困ったときに、同じ技能実習生の仲間は助けてくれますか?',
            q16: '職場で、いじめや差別を受けることはありますか?',
            q17: '日本語での会話に困ることはありますか?',
            q18: '仕事の説明や指示は分かりやすいですか?',
            q19: '分からないことを質問しやすいですか?',
            q20: '会社は、日本語の勉強を助けてくれますか?',
            q21: '母国語で相談できる人(通訳や先輩など)はいますか?',
            q22: '日本の文化や習慣に、慣れていますか?',
            q23: '仕事中に文化の違いで困ることはありますか?',
            q24: '住んでいる場所(寮・アパートなど)は快適ですか?',
            q25: '生活費は、給料に対してちょうどよいですか?',
            q26: '日本での生活で困ることはありますか?',
            q27: '会社は生活のサポートをしてくれますか?',
            q28: '寮や家での生活環境(部屋の広さ・設備など)に満足していますか?',
            q29: '日本での生活は、安全で快適ですか?',
            q30: '今の仕事で、技術や知識が身についていますか?',
            q31: '頑張った分だけ、評価や待遇が良くなると感じますか?',
            q32: 'この会社で、長く働きたいと思いますか?',
            q33: 'ビザ(在留資格)の更新や手続きで、会社や組合は助けてくれますか?',
            q34: 'この会社で働くことで、母国に帰ってから役立つ技術が学べていますか?',
            q35: '母国の友達にも「この会社で働いたほうがいいよ」と思えますか?'
        },
        choices: {
            satisfaction: [
                { emoji: '😢', text: 'とても不満' },
                { emoji: '🙁', text: 'やや不満' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'やや満足' },
                { emoji: '😄', text: 'とても満足' }
            ],
            desire: [
                { emoji: '😔', text: '全くそう思わない' },
                { emoji: '😕', text: 'あまり思わない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '😊', text: 'ややそう思う' },
                { emoji: '💯', text: 'とてもそう思う' }
            ],
            understanding: [
                { emoji: '❌', text: '全く分からない' },
                { emoji: '😕', text: 'あまり分からない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'だいたい分かる' },
                { emoji: '✅', text: 'よく分かる' }
            ],
            familiarity: [
                { emoji: '😰', text: '全く慣れていない' },
                { emoji: '😕', text: 'あまり慣れていない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '😊', text: 'やや慣れている' },
                { emoji: '🌟', text: 'とても慣れている' }
            ],
            availability: [
                { emoji: '❌', text: '全くない' },
                { emoji: '😕', text: 'あまりない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'ある程度ある' },
                { emoji: '✅', text: '十分ある' }
            ],
            negative: [
                { emoji: '✅', text: '全くない' },
                { emoji: '🙂', text: 'ほとんどない' },
                { emoji: '😐', text: '時々ある' },
                { emoji: '😕', text: 'よくある' },
                { emoji: '😟', text: 'かなりある' },
                { emoji: '❌', text: 'いつもある' }
            ]
        }
    },
    vn: {
        title: 'Chẩn đoán Mức độ gắn kết của Thực tập sinh kỹ năng',
        privacyNotice: 'Tên của bạn sẽ không được ghi lại. Hãy trả lời trung thực một cách an tâm.',
        employeeCode: 'Mã nhân viên',
        nationality: 'Quốc tịch',
        selectNationality: 'Vui lòng chọn',
        startButton: 'Bắt đầu khảo sát',
        completionTime: 'Thời gian: Khoảng 5-10 phút',
        completionTitle: '✓ Hoàn thành',
        completionMessage: 'Cảm ơn sự hợp tác của bạn.\nSẽ tự động quay lại màn hình đầu sau 5 giây.',
        freeTextPlaceholder: 'Vui lòng viết tự do',
        errorEmployeeCode: 'Vui lòng chọn mã nhân viên',
        errorNationality: 'Vui lòng chọn quốc tịch',
        errorIncomplete: 'Vui lòng trả lời tất cả các câu hỏi',
        progressText: 'Câu hỏi',
        nationalities: {
            vn: 'Việt Nam', kh: 'Campuchia', in: 'Ấn Độ', ph: 'Philippines', la: 'Lào',
            mn: 'Mông Cổ', bd: 'Bangladesh', lk: 'Sri Lanka', mm: 'Myanmar',
            bt: 'Bhutan', uz: 'Uzbekistan', pk: 'Pakistan', th: 'Thái Lan',
            id: 'Indonesia', np: 'Nepal', cn: 'Trung Quốc', jp: 'Nhật Bản'
        },
        categories: {
            workplace: 'Công việc & Môi trường làm việc',
            compensation: 'Lương & Đãi ngộ',
            family: 'Gia đình & Đời sống cá nhân',
            relationship: 'Quan hệ con người',
            communication: 'Tiếng Nhật & Giao tiếp',
            culture: 'Văn hóa & Giá trị',
            living: 'Môi trường sống',
            career: 'Sự nghiệp & Tương lai'
        },
        questions: {
            q1: 'Nội dung công việc có phù hợp với bạn không?',
            q2: 'Bạn có nghĩ nơi làm việc an toàn không?',
            q3: 'Ngày nghỉ và giờ làm việc có vừa phải không?',
            q4: 'Bầu không khí nơi làm việc có dễ làm việc không?',
            q5: 'Bạn có hài lòng với mức lương không?',
            q6: 'Bạn có nhận được đầy đủ tiền làm thêm giờ và phụ cấp không?',
            q7: 'Các chế độ như bảo hiểm và nghỉ phép có đầy đủ không?',
            q8: 'Làm việc tại công ty này có đủ tiền cho cuộc sống không?',
            q9: 'Bạn có đủ thời gian liên lạc với gia đình không?',
            q10: 'Bạn có đủ tiền gửi về cho gia đình không?',
            q11: 'Bạn có đủ thời gian riêng (nghỉ ngơi, đời tư) không?',
            q12: 'Bạn có muốn đưa gia đình sang Nhật trong tương lai không?',
            q13: 'Quan hệ với các bạn thực tập sinh khác có tốt không?',
            q14: 'Sếp và đồng nghiệp người Nhật có lắng nghe bạn không?',
            q15: 'Khi gặp khó khăn, các bạn thực tập sinh có giúp đỡ bạn không?',
            q16: 'Bạn có bị bắt nạt hoặc phân biệt đối xử tại nơi làm việc không?',
            q17: 'Bạn có gặp khó khăn trong giao tiếp tiếng Nhật không?',
            q18: 'Giải thích và chỉ dẫn công việc có dễ hiểu không?',
            q19: 'Bạn có dễ dàng hỏi khi không hiểu không?',
            q20: 'Công ty có hỗ trợ học tiếng Nhật không?',
            q21: 'Có người (phiên dịch, tiền bối) có thể tư vấn bằng tiếng mẹ đẻ không?',
            q22: 'Bạn đã quen với văn hóa và phong tục Nhật Bản chưa?',
            q23: 'Có gặp khó khăn do khác biệt văn hóa trong công việc không?',
            q24: 'Nơi ở (ký túc xá, căn hộ) có thoải mái không?',
            q25: 'Chi phí sinh hoạt có phù hợp với thu nhập không?',
            q26: 'Bạn có gặp khó khăn trong cuộc sống tại Nhật không?',
            q27: 'Công ty có hỗ trợ cuộc sống không?',
            q28: 'Bạn có hài lòng với môi trường sống (diện tích phòng, thiết bị) không?',
            q29: 'Cuộc sống tại Nhật có an toàn và thoải mái không?',
            q30: 'Công việc hiện tại có giúp bạn tích lũy kỹ thuật và kiến thức không?',
            q31: 'Bạn có cảm thấy đánh giá và đãi ngộ tốt hơn khi cố gắng không?',
            q32: 'Bạn có muốn làm việc lâu dài tại công ty này không?',
            q33: 'Công ty hoặc tổ chức có giúp về thủ tục visa (tư cách lưu trú) không?',
            q34: 'Làm việc tại công ty này có học được kỹ thuật hữu ích khi về nước không?',
            q35: 'Bạn có nghĩ "Nên làm việc ở công ty này" để giới thiệu cho bạn bè ở quê không?'
        },
        choices: {
            satisfaction: [
                { emoji: '😢', text: 'Rất không hài lòng' },
                { emoji: '🙁', text: 'Hơi không hài lòng' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Hơi hài lòng' },
                { emoji: '😄', text: 'Rất hài lòng' }
            ],
            desire: [
                { emoji: '😔', text: 'Hoàn toàn không nghĩ vậy' },
                { emoji: '😕', text: 'Không nghĩ vậy lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '😊', text: 'Hơi nghĩ vậy' },
                { emoji: '💯', text: 'Rất nghĩ vậy' }
            ],
            understanding: [
                { emoji: '❌', text: 'Hoàn toàn không hiểu' },
                { emoji: '😕', text: 'Không hiểu lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Hiểu đại khái' },
                { emoji: '✅', text: 'Hiểu rõ' }
            ],
            familiarity: [
                { emoji: '😰', text: 'Hoàn toàn chưa quen' },
                { emoji: '😕', text: 'Chưa quen lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '😊', text: 'Hơi quen' },
                { emoji: '🌟', text: 'Rất quen' }
            ],
            availability: [
                { emoji: '❌', text: 'Hoàn toàn không có' },
                { emoji: '😕', text: 'Không có lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Có một phần' },
                { emoji: '✅', text: 'Có đầy đủ' }
            ],
            negative: [
                { emoji: '✅', text: 'Hoàn toàn không' },
                { emoji: '🙂', text: 'Hầu như không' },
                { emoji: '😐', text: 'Thỉnh thoảng có' },
                { emoji: '😕', text: 'Thường có' },
                { emoji: '😟', text: 'Khá nhiều' },
                { emoji: '❌', text: 'Luôn luôn' }
            ]
        }
    }
};

// ミャンマー語翻訳データ
translations['my'] = {
    title: 'နည်းပညာအလုပ်သင်များ၏ ပါဝင်မှုအဆင့်ရှာဖွေခြင်း',
    privacyNotice: 'သင့်အမည်ကို မှတ်တမ်းမတင်ပါ။...',
    // ... （ダウンロードしたファイルの全内容をコピペ）
};

// 残り14言語は後で追加（一旦日本語コピー）
['cn', 'tl', 'id', 'th', 'ne', 'hi', 'kh', 'lo', 'mn', 'bd', 'lk', 'dz', 'uz', 'ur'].forEach(lang => {
    translations[lang] = JSON.parse(JSON.stringify(translations.ja));
});

console.log('技能実習生エンゲージメント診断 翻訳データを読み込みました');
