import { configureStore } from "@reduxjs/toolkit"
import todoslices from './todoslices'

export default configureStore({
    reducer:{
        todo:todoslices
    }
})