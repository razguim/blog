import Article from "../models/ArticleModel.js";
import Category from "../models/CategoryModel.js";
import moment from "moment";

const listAllArticles = async (req, res) => {
  try {
    const articles = await Article.find()
    .populate('category')
    
    const articlenbr = articles.length
    console.log(articles)

    res.render("pages/articles", { articles: articles, nombre:articlenbr });
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const listArticle = async (req, res) => {
  try {
    const id = req.params.id
    const anArticle = await Article.findById(id).populate('category')
    res.render("pages/article", { article: anArticle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const articleComments = async (req,res) =>{
  const id = req.params.id
  const article = await Article.findById(id)
  const comment = {
    content: req.body.content,
    created : req.body.created,
  };

  article.comments.push(comment)
  console.log(article.comments);
  article.save(article)
  res.redirect("blog/article")
}


const publishView = async (req, res) => {
  const categories = await Category.find()
  res.render("pages/publier",{categories:categories});
};

const saveArticle = async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
      created: moment().format('LLL'),
      image:req.file.filename,
      category:req.body.category
    });
    await article.save(article);
    res.redirect("/blog/articles");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateArticleView = async (req, res) => {
  try {
    const id = req.params.id;
    const categories = await Category.find()
    const anArticle = await Article.findById(id).populate("category")
    // console.log(anArticle);
    res.render("pages/update", { article: anArticle,categories:categories });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params.id;
    const updatedArticle = {
      title: req.body.title,
      content: req.body.content,
      updated: moment().format('LLL'),
      category:req.body.category
    };
    await Article.findOneAndUpdate(id, updatedArticle);
    console.log(updatedArticle);
    res.redirect("/blog/articles")
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const search = async (req,res) =>{
  try {
    const results = await Article.find({title :{ $regex: req.body.query , $options: 'i' }})
    console.log(results);
    res.render("pages/articles",{ articles: results })
  }catch (err){
    res.status(500).json({ error: err.message });

  }
}

const deleteArticle = async (req,res) => {
  try {
    const {id} = req.params.id
    await Article.deleteOne(id);
    res.redirect('/blog/articles')
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
}

export { listAllArticles,listArticle,articleComments, publishView, saveArticle, updateArticleView,updateArticle,search,deleteArticle };
