const translations = {
    ja: {
        title: '職場アンケート',
        employeeCode: '社員番号',
        nationality: '国籍',
        button: 'アンケートを始める',
        nationalities: { jp: '日本', vn: 'ベトナム', cn: '中国', ph: 'フィリピン', id: 'インドネシア', th: 'タイ', np: 'ネパール', in: 'インド', mm: 'ミャンマー', kh: 'カンボジア', la: 'ラオス', mn: 'モンゴル', bd: 'バングラデシュ', lk: 'スリランカ', bt: 'ブータン', uz: 'ウズベキスタン' },
        categories: { workEnvironment: '職場環境', communication: 'コミュニケーション', workLifeBalance: 'ワークライフバランス', careerDevelopment: 'キャリア開発', compensation: '報酬・待遇', management: '経営・マネジメント', diversity: '多様性・包摂性', safety: '安全・健康' },
        questions: { q1: '職場の作業環境に満足していますか?', q2: '必要な設備や道具は十分に提供されていますか?', q3: '職場は清潔で整理整頓されていますか?', q4: '休憩時間や休憩スペースは適切ですか?', q5: '上司や同僚とのコミュニケーションは円滑ですか?', q6: '仕事の指示や説明はわかりやすいですか?', q7: '困ったときに相談できる人がいますか?', q8: '定期的なフィードバックを受けていますか?', q9: '勤務時間は適切ですか?', q10: '残業は過度ではありませんか?', q11: '有給休暇を取得しやすいですか?', q12: '仕事とプライベートのバランスが取れていますか?', q13: '昇進や昇給の機会がありますか?', q14: '研修や教育の機会が提供されていますか?', q15: 'キャリアアップのサポートを受けていますか?', q16: '新しいスキルを学ぶ機会がありますか?', q17: '給与は仕事に見合っていますか?', q18: '福利厚生に満足していますか?', q19: 'ボーナスや手当は適切ですか?', q20: '社会保険や年金制度は整っていますか?', q21: '会社の方針や目標は明確ですか?', q22: '経営陣の決定は公平だと感じますか?', q23: '意見や提案を聞いてもらえますか?', q24: '会社の将来に期待が持てますか?', q25: '文化や言語の違いが尊重されていますか?', q26: '差別やハラスメントを感じたことはありますか?', q27: '多様な背景を持つ従業員が活躍していますか?', q28: '公平な評価を受けていると感じますか?', q29: '職場は安全ですか?', q30: '安全教育や訓練は十分ですか?', q31: 'けがや事故の対応は適切ですか?', q32: '健康診断やメンタルヘルスのサポートはありますか?', q33: '総合的に、この職場で働くことに満足していますか?', q34: 'この会社を友人や家族に勧めたいですか?', q35: '改善してほしいことがあれば、自由に書いてください(任意)' },
        choices: { satisfaction: ['非常に不満', '不満', 'どちらでもない', '満足', '非常に満足'], desire: ['全くそう思わない', 'そう思わない', 'どちらでもない', 'そう思う', '非常にそう思う'], understanding: ['全く理解していない', 'あまり理解していない', 'どちらでもない', '理解している', '完全に理解している'], familiarity: ['全く知らない', 'あまり知らない', 'どちらでもない', '知っている', 'よく知っている'], availability: ['全くない', 'ほとんどない', 'どちらでもない', 'ある', '十分ある'], negative: ['頻繁にある', 'たまにある', 'どちらでもない', 'ほとんどない', '全くない'] },
        errors: { employeeCode: '社員番号を入力してください', nationality: '国籍を選択してください' },
        completion: { title: 'アンケート完了', message: 'ご協力ありがとうございました', autoClose: '自動的に閉じます...', remaining: '残り', seconds: '秒' },
        footerInfo: '所要時間: 約5〜10分'
    },
    vn: {
        title: 'Khảo sát Nơi làm việc',
        employeeCode: 'Mã nhân viên',
        nationality: 'Quốc tịch',
        button: 'Bắt đầu khảo sát',
        nationalities: { jp: 'Nhật Bản', vn: 'Việt Nam', cn: 'Trung Quốc', ph: 'Philippines', id: 'Indonesia', th: 'Thái Lan', np: 'Nepal', in: 'Ấn Độ', mm: 'Myanmar', kh: 'Campuchia', la: 'Lào', mn: 'Mông Cổ', bd: 'Bangladesh', lk: 'Sri Lanka', bt: 'Bhutan', uz: 'Uzbekistan' },
        categories: { workEnvironment: 'Môi trường làm việc', communication: 'Giao tiếp', workLifeBalance: 'Cân bằng công việc-cuộc sống', careerDevelopment: 'Phát triển nghề nghiệp', compensation: 'Lương thưởng', management: 'Quản lý', diversity: 'Đa dạng và hòa nhập', safety: 'An toàn và sức khỏe' },
        questions: { q1: 'Bạn có hài lòng với môi trường làm việc không?', q2: 'Thiết bị và công cụ cần thiết có được cung cấp đầy đủ không?', q3: 'Nơi làm việc có sạch sẽ và ngăn nắp không?', q4: 'Thời gian nghỉ giải lao và không gian nghỉ ngơi có phù hợp không?', q5: 'Giao tiếp với cấp trên và đồng nghiệp có suôn sẻ không?', q6: 'Hướng dẫn và giải thích công việc có dễ hiểu không?', q7: 'Bạn có người để tham khảo khi gặp khó khăn không?', q8: 'Bạn có nhận được phản hồi thường xuyên không?', q9: 'Giờ làm việc có phù hợp không?', q10: 'Làm thêm giờ có quá mức không?', q11: 'Bạn có dễ dàng xin nghỉ phép không?', q12: 'Bạn có cân bằng giữa công việc và cuộc sống cá nhân không?', q13: 'Có cơ hội thăng tiến và tăng lương không?', q14: 'Có cung cấp cơ hội đào tạo và giáo dục không?', q15: 'Bạn có nhận được hỗ trợ phát triển sự nghiệp không?', q16: 'Có cơ hội học kỹ năng mới không?', q17: 'Mức lương có xứng đáng với công việc không?', q18: 'Bạn có hài lòng với phúc lợi không?', q19: 'Tiền thưởng và phụ cấp có phù hợp không?', q20: 'Hệ thống bảo hiểm xã hội và lương hưu có đầy đủ không?', q21: 'Chính sách và mục tiêu của công ty có rõ ràng không?', q22: 'Bạn có cảm thấy quyết định của ban lãnh đạo công bằng không?', q23: 'Ý kiến và đề xuất của bạn có được lắng nghe không?', q24: 'Bạn có kỳ vọng vào tương lai của công ty không?', q25: 'Sự khác biệt về văn hóa và ngôn ngữ có được tôn trọng không?', q26: 'Bạn đã từng cảm thấy bị phân biệt đối xử hoặc quấy rối không?', q27: 'Nhân viên có nền tảng đa dạng có hoạt động tích cực không?', q28: 'Bạn có cảm thấy được đánh giá công bằng không?', q29: 'Nơi làm việc có an toàn không?', q30: 'Giáo dục và đào tạo về an toàn có đầy đủ không?', q31: 'Xử lý chấn thương và tai nạn có thích hợp không?', q32: 'Có kiểm tra sức khỏe và hỗ trợ sức khỏe tâm thần không?', q33: 'Nhìn chung, bạn có hài lòng khi làm việc ở nơi này không?', q34: 'Bạn có muốn giới thiệu công ty này cho bạn bè hoặc gia đình không?', q35: 'Nếu có điều gì bạn muốn cải thiện, vui lòng viết tự do (tùy chọn)' },
        choices: { satisfaction: ['Rất không hài lòng', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Rất hài lòng'], desire: ['Hoàn toàn không đồng ý', 'Không đồng ý', 'Bình thường', 'Đồng ý', 'Hoàn toàn đồng ý'], understanding: ['Hoàn toàn không hiểu', 'Không hiểu lắm', 'Bình thường', 'Hiểu', 'Hiểu hoàn toàn'], familiarity: ['Hoàn toàn không biết', 'Không biết lắm', 'Bình thường', 'Biết', 'Biết rất rõ'], availability: ['Hoàn toàn không có', 'Hầu như không có', 'Bình thường', 'Có', 'Có đầy đủ'], negative: ['Thường xuyên', 'Thỉnh thoảng', 'Bình thường', 'Hầu như không', 'Hoàn toàn không'] },
        errors: { employeeCode: 'Vui lòng nhập mã nhân viên', nationality: 'Vui lòng chọn quốc tịch' },
        completion: { title: 'Hoàn thành khảo sát', message: 'Cảm ơn sự hợp tác của bạn', autoClose: 'Tự động đóng...', remaining: 'Còn lại', seconds: 'giây' },
        footerInfo: 'Thời gian: Khoảng 5-10 phút'
    }
};

const questionTypes = {
    q1: 'satisfaction', q2: 'availability', q3: 'satisfaction', q4: 'satisfaction', q5: 'satisfaction',
    q6: 'understanding', q7: 'availability', q8: 'desire', q9: 'satisfaction', q10: 'negative',
    q11: 'desire', q12: 'satisfaction', q13: 'availability', q14: 'availability', q15: 'desire',
    q16: 'availability', q17: 'satisfaction', q18: 'satisfaction', q19: 'satisfaction', q20: 'satisfaction',
    q21: 'understanding', q22: 'desire', q23: 'desire', q24: 'desire', q25: 'desire',
    q26: 'negative', q27: 'desire', q28: 'desire', q29: 'satisfaction', q30: 'satisfaction',
    q31: 'satisfaction', q32: 'availability', q33: 'satisfaction', q34: 'desire', q35: 'text'
};
