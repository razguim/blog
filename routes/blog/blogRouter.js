import express from "express";
import {listAllArticles,listArticle,articleComments,publishView,saveArticle,updateArticleView,updateArticle,search,deleteArticle} from "../../controllers/ArticleController.js"
import { listAllCategories,listCategorie, creerView, saveCategorie, updateCategorieView,updateCategorie,deleteCategorie } from "../../controllers/CategoryController.js"
import upload from "../../helpers/uploadHandler.js"
const BlogRoute = express.Router();

BlogRoute.get('/articles',listAllArticles);
BlogRoute.get('/article/:id',listArticle);
BlogRoute.post('/article/:id',articleComments);
BlogRoute.get('/publier',publishView);
BlogRoute.post('/publier',upload.single('image'),saveArticle);
BlogRoute.get('/update/:id',updateArticleView);
BlogRoute.post('/update/:id',updateArticle);
BlogRoute.post('/articles',search);
// ArticleRouter.get('/confirmation/:id',confirmation);
BlogRoute.get('/delete/:id',deleteArticle);
// ArticleRouter.get('/vider',deleteAll);


BlogRoute.get('/categories',listAllCategories);
BlogRoute.get('/categorie/:id',listCategorie);
BlogRoute.get('/categoriser',creerView);
BlogRoute.post('/categoriser',saveCategorie);
BlogRoute.get('/update/:id',updateCategorieView);
BlogRoute.post('/update/:id',updateCategorie);

export default BlogRoute;