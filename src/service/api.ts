'use strict'
import axios from '@/utils/axios'

// 首页-轮播图-#1
export const reqBanner = (params: object) => axios.post('/api/banner', params)

// 新闻列表-#3
export const reqNews = (params: object) => axios.post('/api/news', params)

// 产品列表-#3
export const reqProduct = (params: object) => axios.post('/api/product', params)

// 获取关于我的信息
export const reqAbout = (params: object) => axios.get('/api/about', params)
