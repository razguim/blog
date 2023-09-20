import Article from "../models/ArticleModel.js";
import Category from "../models/CategoryModel.js";

const listAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("pages/categories", { categories: categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const listCategorie = async (req, res) => {
  try {
    const id = req.params.id
    const aCategory = await Category.findById(id);
    const articles = await Article.find({category: id})
    res.render("pages/categorie", { categorie: aCategory, articles: articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const creerView = (req, res) => {
  res.render("pages/categoriser");
};

const saveCategorie = async (req, res) => {
  try {
    const categorie = new Category({
      title: req.body.title,
    });
    await categorie.save(categorie);
    res.redirect("/blog/categories");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateCategorieView = async (req, res) => {
  try {
    const { id } = req.params.id;
    const anCategory = await Category.findOne(id);
    res.render("pages/update", { Category: anCategory });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCategorie = async (req, res) => {
  try {
    const { id } = req.params.id;
    const updatedCategorie = {
      title: req.body.title,
    };
    await Category.findOneAndUpdate(id, updatedCategorie);
    res.redirect("/blog/Categories")
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const deleteCategorie = async (req,res) => {
  try {
    const {id} = req.params.id
    await Category.deleteOne(id);
    res.redirect('/blog/Categorys')
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
}

export {
    listAllCategories,
    listCategorie,
    creerView,
    saveCategorie,
    updateCategorieView,
    updateCategorie,
    deleteCategorie
 };
