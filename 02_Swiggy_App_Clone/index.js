import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const restList = [
    {
        info: {
            id: "324765",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/65c0ebef-61fc-4c18-8763-319b81c0cb99_324765.JPG",
            locality: "BMC Chowk",
            areaName: "South_Jalandhar",
            costForTwo: "₹350 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 4.4,
            parentId: "721",
            avgRatingString: "4.4",
            totalRatingsString: "3.4K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 04:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "Rxawards/_CATEGORY-Pizza.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/pizza-hut-bmc-chowk-south-jalandhar-rest324765",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "254136",
            name: "McDonald's",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/39d8520f-6415-4d46-9767-b5e5b06ea596_254136.JPG",
            locality: "Lajpat Nagar",
            areaName: "Shastri Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "American"
            ],
            avgRating: 4.5,
            parentId: "630",
            avgRatingString: "4.5",
            totalRatingsString: "8.4K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 02:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹117"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.2",
                    ratingCount: "4.8K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/mcdonalds-lajpat-nagar-shastri-nagar-rest254136",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "70994",
            name: "Burger King",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/6dbcd599-1ce1-407d-9338-d7791a877814_70994.jpg",
            locality: "Rainbow Road",
            areaName: "Model Town",
            costForTwo: "₹350 for two",
            cuisines: [
                "Burgers",
                "American"
            ],
            avgRating: 4.5,
            parentId: "166",
            avgRatingString: "4.5",
            totalRatingsString: "22K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/burger-king-rainbow-road-model-town-rest70994",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "347917",
            name: "KFC",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a3f5fea7-8629-4119-a5d8-dbfeb41247e2_347917.JPG",
            locality: "Mahavir Marg",
            areaName: "Shastri Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            avgRating: 4.4,
            parentId: "547",
            avgRatingString: "4.4",
            totalRatingsString: "3.8K+",
            sla: {
                deliveryTime: 16,
                lastMileTravel: 1.5,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "1.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹179"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/kfc-mahavir-marg-shastri-nagar-rest347917",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "575223",
            name: "Veg Darbar by Behrouz Biryani",
            cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
            locality: "Eminent Mall",
            areaName: "Lajpat Nagar",
            costForTwo: "₹700 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts"
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "344904",
            avgRatingString: "4.4",
            totalRatingsString: "58",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    },
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/veg-darbar-by-behrouz-biryani-eminent-mall-lajpat-nagar-rest575223",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "861541",
            name: "Pastas By Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/ed663582-6f0d-442a-bd9b-e026e90b286f_861541.jpg",
            locality: "BMC Chowk",
            areaName: "South_Jalandhar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pastas"
            ],
            avgRating: 3.8,
            parentId: "306806",
            avgRatingString: "3.8",
            totalRatingsString: "36",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 04:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/pastas-by-pizza-hut-bmc-chowk-south-jalandhar-rest861541",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "361107",
            name: "Shravan Specials by Lunchbox",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/11/d26ad57b-1678-4869-bd52-ecf0017a444c_361107.JPG",
            locality: "Eminent Mall",
            areaName: "Lajpat Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.1,
            veg: true,
            parentId: "21938",
            avgRatingString: "4.1",
            totalRatingsString: "315",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹149"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/shravan-specials-by-lunchbox-eminent-mall-lajpat-nagar-rest361107",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "800080",
            name: "Quick Crave",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/2/d9cd6d65-cd5e-4905-b78d-e4bb6605efa6_800080.jpg",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹500 for two",
            cuisines: [
                "Pizzas",
                "Fast Food"
            ],
            avgRating: 4.2,
            parentId: "478149",
            avgRatingString: "4.2",
            totalRatingsString: "24",
            sla: {
                deliveryTime: 18,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        description: "OnlyOnSwiggy"
                    },
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "OnlyOnSwiggy",
                                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/quick-crave-eminent-mall-shastri-nagar-rest800080",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "566483",
            name: "Faasos Signature Wraps & Rolls",
            cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹350 for two",
            cuisines: [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.4,
            parentId: "340366",
            avgRatingString: "4.4",
            totalRatingsString: "220",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/faasos-signature-wraps-and-rolls-eminent-mall-shastri-nagar-rest566483",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "801436",
            name: "Makhani Darbar",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/33181e02-78ba-4b9f-a277-2d9b00a00f16_801436.JPG",
            locality: "Jalandhar",
            areaName: "Eminent Mall",
            costForTwo: "₹500 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts"
            ],
            avgRating: 4.2,
            parentId: "478595",
            avgRatingString: "4.2",
            totalRatingsString: "132",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/makhani-darbar-eminent-mall-rest801436",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "260766",
            name: "Subway",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/4bbf139e-837e-4dff-80b8-249bd89fe6f8_260766.jpg",
            locality: "Model Town",
            areaName: "Nakodar Road",
            costForTwo: "₹300 for two",
            cuisines: [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            avgRating: 4.3,
            parentId: "2",
            avgRatingString: "4.3",
            totalRatingsString: "2.4K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 05:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹119"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "397"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/subway-model-town-nakodar-road-rest260766",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "421645",
            name: "La Pino'z Pizza",
            cloudinaryImageId: "xed8iztym0tfhp49qec7",
            locality: "PPR Mall",
            areaName: "PPR Market",
            costForTwo: "₹300 for two",
            cuisines: [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4,
            parentId: "4961",
            avgRatingString: "4.0",
            totalRatingsString: "5.0K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 3.5,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "3.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 05:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Pizza.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/la-pinoz-pizza-ppr-mall-ppr-market-rest421645",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "72826",
            name: "Domino's Pizza",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/23697733-f9cc-4343-82db-2db18c01e604_72826.JPG",
            locality: "Sehdev Market",
            areaName: "Shastri Nagar",
            costForTwo: "₹750 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "2456",
            avgRatingString: "4.3",
            totalRatingsString: "2.9K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 01:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Pizza.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹69"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "2.1K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/dominos-pizza-sehdev-market-shastri-nagar-rest72826",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "74227",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/6ec37658-04ae-4317-81fa-edff0587eb45_74227.JPG",
            locality: "Shastri Nagar",
            areaName: "Shastri Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            avgRating: 4.5,
            veg: true,
            parentId: "2233",
            avgRatingString: "4.5",
            totalRatingsString: "6.1K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 2.6,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 02:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.5",
                    ratingCount: "811"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/the-belgian-waffle-co-shastri-nagar-rest74227",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "444143",
            name: "Wendy's Burgers",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/faae329c-3107-4f6a-9a0f-f10fb25d80c6_444143.JPG",
            locality: "Guru Nanak Mission Chowk",
            areaName: "Shastri Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
                "Burgers",
                "American",
                "Fast Food",
                "Snacks"
            ],
            avgRating: 4.2,
            parentId: "972",
            avgRatingString: "4.2",
            totalRatingsString: "3.5K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/wendys-burgers-guru-nanak-mission-chowk-shastri-nagar-rest444143",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "361099",
            name: "Faasos - Wraps, Rolls & Shawarma",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/a5d8a302-f764-4569-b759-6278a5deb3f4_361099.JPG",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.4,
            parentId: "21809",
            avgRatingString: "4.4",
            totalRatingsString: "5.1K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹89"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/faasos-wraps-rolls-and-shawarma-eminent-mall-shastri-nagar-rest361099",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "361103",
            name: "Sweet Truth - Cake and Desserts",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/b837e311-3b20-401a-b2c1-c7ab7cd83be2_361103.jpg",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹450 for two",
            cuisines: [
                "Desserts",
                "Ice Cream",
                "Bakery",
                "Beverages"
            ],
            avgRating: 4.5,
            parentId: "4444",
            avgRatingString: "4.5",
            totalRatingsString: "1.0K+",
            sla: {
                deliveryTime: 17,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/sweet-truth-cake-and-desserts-eminent-mall-shastri-nagar-rest361103",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "361106",
            name: "The Biryani Life",
            cloudinaryImageId: "zzmg1peb1bhtcxoxdwa7",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹250 for two",
            cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.4,
            parentId: "8496",
            avgRatingString: "4.4",
            totalRatingsString: "1.6K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "Rxawards/_CATEGORY-Biryani.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Biryani.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹159"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/the-biryani-life-eminent-mall-shastri-nagar-rest361106",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "361105",
            name: "The Good Bowl",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/aa452bb5-2721-4e0d-b1e2-8cd5d209fbb4_361105.jpg",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Biryani",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.5,
            parentId: "7918",
            avgRatingString: "4.5",
            totalRatingsString: "1.8K+",
            sla: {
                deliveryTime: 13,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "10-15 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹119"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/the-good-bowl-eminent-mall-shastri-nagar-rest361105",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "361102",
            name: "Firangi Bake",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/9c44d4d8-b596-4dc1-8db1-c3a2875ac48e_361102.jpg",
            locality: "Eminent Mall",
            areaName: "Shastri Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Pastas",
                "Italian",
                "Mexican",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.5,
            parentId: "3952",
            avgRatingString: "4.5",
            totalRatingsString: "501",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-08-22 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹289"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c732deef-ad6b-4c9b-8ec6-c8d29190bc1f"
        },
        cta: {
            link: "https://www.swiggy.com/city/jalandhar/firangi-bake-eminent-mall-shastri-nagar-rest361102",
            type: "WEBLINK"
        }
    }
];


function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_KugauozA01RuCJ1GIAJmbztKj4d_YSlBvLehtjyvcMeG6CN_Z-TUq0&s" alt="logo image" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

function RestaurantCard(props) {
    const { restCard } = props;
    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restCard.info.cloudinaryImageId} alt="restaurant image" />
            <h3>{restCard.info.name}</h3>
            <p className="cuisine">{restCard.info.cuisines.join(", ")}</p>
            <p>{restCard.info.avgRating}</p>
            <p>{restCard.info.sla.slaString}</p>
        </div>
    )
}

function Body() {
    const [filterRestList, setFilterRestList] = useState(restList);

    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurants and food" />
                <button className="search-button">Search</button>
            </div>

            <div className="filter-buttons"> 
            <button onClick={()=> {const filtered= filterRestList.filter((restaurant)=>{return restaurant.info.avgRating > 4.4}); setFilterRestList(filtered) } }>Filetered Buttons</button>
            </div>
            <div className="restaurant-list">
                {
                    filterRestList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} restCard={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);