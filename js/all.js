Vue.createApp({
    data() {
        return {
            abouts: [{
                id: '1',
                title: '正確資訊',
                para: '本網站提供政府給予最新資訊確保防疫資訊無落差'
            }, {
                id: '2',
                title: '團隊研發',
                para: '結合政府醫院一起研發新型疫苗對抗WH-78病毒'
            }, {
                id: '3',
                title: '團隊陣容',
                para: '集結醫療及科技業IT人才打造資訊整合網站'
            }, {
                id: '4',
                title: '疫苗種類',
                para: '目前各地方醫院有WH疫苗新型WH-2仍在實驗階段'
            }
            ],
            products: [{
                title: "抗菌洗手乳",
                
            }]
        }
    }
}).mount("#app");