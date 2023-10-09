* Baştan sona Proje Aşamaları

    - Projeyi oluşturmak  (npx create-expo-app)

    - İndirilecek "npm" paketlerinin belirlenmesi ve indirilmesi

    - Github repo açılıp paketler indirilen projenin "push" edilmesi

    - Api Call (3. parti bir api den yada Firebase dışı backend den veri çekilmesi durumunda kullanılır )

    - Eğer Firebase kullanılıyorsa:
        * Authentication
        * Database

    - Redux kurulumu

        * Store

        * User Slice (eğer üyelik sistemi varsa)

        * Data Slice (ekrana yansıtılacak veriler için)

        * Diğer Slices 👇🏻👇🏻👇🏻👇🏻


        =>  ÖRNEK-1 Shopping Cart:            const initialState = {
                                                        cartItems: [],
                                                        amount: 0,
                                                        total: 0,
                                                        isLoading: true,
                                                    };

        =>  ÖRNEK-2 Modal:                    const initialState = {
                                                        isOpen: false,
                                                    };

        =>  ÖRNEK-3 Search:                   const initialState: {
                                                        searchTerm: '',
                                                        filterOption: 'all',
                                                    },

        =>  ÖRNEK-4 Form:                     const initialState: {
                                                        formData: {
                                                        username: '',
                                                        email: '',
                                                        password: '',
                                                        },
                                                        formErrors: {},
                                                    },

        =>  ÖRNEK-5 Web Socket:               const initialState: {
                                                        isConnected: false,
                                                        messages: [],
                                                    },



    - Screens ve Components






* Folder Structure
    - Assets
      * Images
      * Fonts
      * Audio and Video
      * JSON files (Hazır kullanılacak veriler varsa)
      * Localization (Çoklu dil desteği olması durumunda dil dosyaları)
      * Icons

    - Screens

    - Components

    - Redux
    
    - Navigations ( Eğer Kullanıcı Üyelik Sistemi olan bir uygulama değilse aşağıdakiler terine sadece tabs.js yeterli olacaktır.)
        * RootNavigation
        * AuthStack.js
        * UserStack.js 
        
    - api.js
