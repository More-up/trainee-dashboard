// 質問タイプの定義（グローバル）
const questionTypes = {
    q1: 'satisfaction',
    q2: 'availability',
    q3: 'satisfaction',
    q4: 'satisfaction',
    q5: 'satisfaction',
    q6: 'understanding',
    q7: 'availability',
    q8: 'desire',
    q9: 'satisfaction',
    q10: 'negative',
    q11: 'desire',
    q12: 'satisfaction',
    q13: 'availability',
    q14: 'availability',
    q15: 'desire',
    q16: 'availability',
    q17: 'satisfaction',
    q18: 'satisfaction',
    q19: 'satisfaction',
    q20: 'satisfaction',
    q21: 'understanding',
    q22: 'desire',
    q23: 'desire',
    q24: 'desire',
    q25: 'desire',
    q26: 'negative',
    q27: 'desire',
    q28: 'desire',
    q29: 'satisfaction',
    q30: 'satisfaction',
    q31: 'satisfaction',
    q32: 'availability',
    q33: 'satisfaction',
    q34: 'desire',
    q35: 'text'
};

// 翻訳データ
const translations = {
    ja: {
        title: '職場アンケート',
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
            workplace: '職場環境',
            communication: 'コミュニケーション',
            workContent: '業務内容',
            evaluation: '評価・処遇',
            growth: '成長機会',
            balance: 'ワークライフバランス',
            future: '将来展望',
            free: '自由記述'
        },
        questions: {
            q1: '職場の作業環境に満足していますか?',
            q2: '必要な設備や道具は十分に提供されていますか?',
            q3: '職場は清潔で整理整頓されていますか?',
            q4: '休憩時間や休憩スペースは適切ですか?',
            q5: '上司や同僚とのコミュニケーションは円滑ですか?',
            q6: '仕事の指示や説明はわかりやすいですか?',
            q7: '困ったときに相談できる人がいますか?',
            q8: '定期的なフィードバックを受けていますか?',
            q9: '勤務時間は適切ですか?',
            q10: '残業は過度ではありませんか?',
            q11: '有給休暇を取得しやすいですか?',
            q12: '仕事とプライベートのバランスが取れていますか?',
            q13: '昇進や昇給の機会がありますか?',
            q14: '研修や教育の機会が提供されていますか?',
            q15: 'キャリアアップのサポートを受けていますか?',
            q16: '新しいスキルを学ぶ機会がありますか?',
            q17: '給与は仕事に見合っていますか?',
            q18: '福利厚生に満足していますか?',
            q19: 'ボーナスや手当は適切ですか?',
            q20: '社会保険や年金制度は整っていますか?',
            q21: '会社の方針や目標は明確ですか?',
            q22: '経営陣の決定は公平だと感じますか?',
            q23: '意見や提案を聞いてもらえますか?',
            q24: '会社の将来に期待が持てますか?',
            q25: '文化や言語の違いが尊重されていますか?',
            q26: '差別やハラスメントを感じたことはありますか?',
            q27: '多様な背景を持つ従業員が活躍していますか?',
            q28: '公平な評価を受けていると感じますか?',
            q29: '職場は安全ですか?',
            q30: '安全教育や訓練は十分ですか?',
            q31: 'けがや事故の対応は適切ですか?',
            q32: '健康診断やメンタルヘルスのサポートはありますか?',
            q33: '総合的に、この職場で働くことに満足していますか?',
            q34: 'この会社を友人や家族に勧めたいですか?',
            q35: '改善してほしいことがあれば、自由にお書きください（任意）'
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: '非常に不満' },
                { emoji: '😢', text: '不満' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: '満足' },
                { emoji: '😊', text: 'かなり満足' },
                { emoji: '😄', text: '非常に満足' }
            ],
            desire: [
                { emoji: '😭', text: '全くそう思わない' },
                { emoji: '😢', text: 'そう思わない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'そう思う' },
                { emoji: '😊', text: 'かなりそう思う' },
                { emoji: '😄', text: '非常にそう思う' }
            ],
            understanding: [
                { emoji: '😭', text: '全く理解していない' },
                { emoji: '😢', text: 'あまり理解していない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: '理解している' },
                { emoji: '😊', text: 'よく理解している' },
                { emoji: '😄', text: '完全に理解している' }
            ],
            familiarity: [
                { emoji: '😭', text: '全く知らない' },
                { emoji: '😢', text: 'あまり知らない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: '知っている' },
                { emoji: '😊', text: 'よく知っている' },
                { emoji: '😄', text: '非常によく知っている' }
            ],
            availability: [
                { emoji: '😭', text: '全くない' },
                { emoji: '😢', text: 'ほとんどない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'ある' },
                { emoji: '😊', text: '十分ある' },
                { emoji: '😄', text: '非常に十分' }
            ],
            negative: [
                { emoji: '😄', text: '全くない' },
                { emoji: '😊', text: 'ほとんどない' },
                { emoji: '🙂', text: '少しある' },
                { emoji: '😐', text: 'ある' },
                { emoji: '😢', text: 'かなりある' },
                { emoji: '😭', text: '非常に多い' }
            ]
        }
    },
    // 他の言語も同様の構造で定義
    vn: {
        title: 'Khảo sát Nơi làm việc',
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
            workplace: 'Môi trường làm việc',
            communication: 'Giao tiếp',
            workContent: 'Nội dung công việc',
            evaluation: 'Đánh giá - Đãi ngộ',
            growth: 'Cơ hội phát triển',
            balance: 'Cân bằng công việc-cuộc sống',
            future: 'Triển vọng tương lai',
            free: 'Ý kiến tự do'
        },
        questions: {
            q1: 'Bạn có hài lòng với môi trường làm việc không?',
            q2: 'Thiết bị và công cụ cần thiết có được cung cấp đầy đủ không?',
            q3: 'Nơi làm việc có sạch sẽ và ngăn nắp không?',
            q4: 'Thời gian nghỉ giải lao và không gian nghỉ ngơi có phù hợp không?',
            q5: 'Giao tiếp với cấp trên và đồng nghiệp có suôn sẻ không?',
            q6: 'Hướng dẫn và giải thích công việc có dễ hiểu không?',
            q7: 'Bạn có người để tham khảo khi gặp khó khăn không?',
            q8: 'Bạn có nhận được phản hồi thường xuyên không?',
            q9: 'Giờ làm việc có phù hợp không?',
            q10: 'Làm thêm giờ có quá mức không?',
            q11: 'Bạn có dễ dàng xin nghỉ phép không?',
            q12: 'Bạn có cân bằng giữa công việc và cuộc sống cá nhân không?',
            q13: 'Có cơ hội thăng tiến và tăng lương không?',
            q14: 'Có cung cấp cơ hội đào tạo và giáo dục không?',
            q15: 'Bạn có nhận được hỗ trợ phát triển sự nghiệp không?',
            q16: 'Có cơ hội học kỹ năng mới không?',
            q17: 'Mức lương có xứng đáng với công việc không?',
            q18: 'Bạn có hài lòng với phúc lợi không?',
            q19: 'Tiền thưởng và phụ cấp có phù hợp không?',
            q20: 'Hệ thống bảo hiểm xã hội và lương hưu có đầy đủ không?',
            q21: 'Chính sách và mục tiêu của công ty có rõ ràng không?',
            q22: 'Bạn có cảm thấy quyết định của ban lãnh đạo công bằng không?',
            q23: 'Ý kiến và đề xuất của bạn có được lắng nghe không?',
            q24: 'Bạn có kỳ vọng vào tương lai của công ty không?',
            q25: 'Sự khác biệt về văn hóa và ngôn ngữ có được tôn trọng không?',
            q26: 'Bạn có cảm thấy phân biệt đối xử hoặc quấy rối không?',
            q27: 'Nhân viên có nền tảng đa dạng có hoạt động tích cực không?',
            q28: 'Bạn có cảm thấy được đánh giá công bằng không?',
            q29: 'Nơi làm việc có an toàn không?',
            q30: 'Giáo dục và đào tạo về an toàn có đầy đủ không?',
            q31: 'Xử lý chấn thương và tai nạn có phù hợp không?',
            q32: 'Có khám sức khỏe và hỗ trợ sức khỏe tinh thần không?',
            q33: 'Tổng thể, bạn có hài lòng khi làm việc tại nơi này không?',
            q34: 'Bạn có muốn giới thiệu công ty này cho bạn bè hoặc gia đình không?',
            q35: 'Nếu có điều gì cần cải thiện, hãy viết tự do (tùy chọn)'
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: 'Rất không hài lòng' },
                { emoji: '😢', text: 'Không hài lòng' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Hài lòng' },
                { emoji: '😊', text: 'Khá hài lòng' },
                { emoji: '😄', text: 'Rất hài lòng' }
            ],
            desire: [
                { emoji: '😭', text: 'Hoàn toàn không nghĩ vậy' },
                { emoji: '😢', text: 'Không nghĩ vậy' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Nghĩ vậy' },
                { emoji: '😊', text: 'Khá nghĩ vậy' },
                { emoji: '😄', text: 'Hoàn toàn nghĩ vậy' }
            ],
            understanding: [
                { emoji: '😭', text: 'Hoàn toàn không hiểu' },
                { emoji: '😢', text: 'Không hiểu lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Hiểu' },
                { emoji: '😊', text: 'Hiểu rõ' },
                { emoji: '😄', text: 'Hoàn toàn hiểu' }
            ],
            familiarity: [
                { emoji: '😭', text: 'Hoàn toàn không biết' },
                { emoji: '😢', text: 'Không biết lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Biết' },
                { emoji: '😊', text: 'Biết rõ' },
                { emoji: '😄', text: 'Rất rõ' }
            ],
            availability: [
                { emoji: '😭', text: 'Hoàn toàn không có' },
                { emoji: '😢', text: 'Hầu như không có' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Có' },
                { emoji: '😊', text: 'Đủ' },
                { emoji: '😄', text: 'Rất đủ' }
            ],
            negative: [
                { emoji: '😄', text: 'Hoàn toàn không' },
                { emoji: '😊', text: 'Hầu như không' },
                { emoji: '🙂', text: 'Một chút' },
                { emoji: '😐', text: 'Có' },
                { emoji: '😢', text: 'Khá nhiều' },
                { emoji: '😭', text: 'Rất nhiều' }
            ]
        }
    }
};

// 残り15言語は日本語ベースで追加（基本ラベルのみ翻訳）
['cn', 'tl', 'id', 'th', 'ne', 'hi', 'my', 'kh', 'lo', 'mn', 'bd', 'lk', 'dz', 'uz', 'ur'].forEach(lang => {
    if (!translations[lang]) {
        translations[lang] = JSON.parse(JSON.stringify(translations.ja));
    }
});

// 中国語
translations.cn.title = '职场问卷调查';
translations.cn.privacyNotice = '您的姓名不会被记录。请放心如实回答。';
translations.cn.employeeCode = '员工编号';
translations.cn.nationality = '国籍';
translations.cn.selectNationality = '请选择';
translations.cn.startButton = '开始问卷';
translations.cn.completionTime = '所需时间：约5-10分钟';
translations.cn.completionTitle = '✓ 已完成';
translations.cn.completionMessage = '感谢您的配合。\n5秒后将自动返回初始屏幕。';
translations.cn.freeTextPlaceholder = '请自由填写';
translations.cn.progressText = '问题';

console.log('翻訳データとquestionTypesを読み込みました');
