import httpAxios from "../httpAxios";

function getAll() {
  return httpAxios.get("/product/index");
}
function getById(id) {
  return httpAxios.get(`/product/show/${id}`);
}
function create(product) {
  return httpAxios.post('/product/store', product);
}
function update(product, id) {
  return httpAxios.post(`/product/update/${id}`, product);
}
function remove(id) {
  return httpAxios.delete(`/product/destroy/${id}`);
}
// frontend
function getProductHome(limit,category_id) {
  return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductAll(limit) {
  return httpAxios.get(`product_all/${limit}`);
}
function getProductBySlug(slug) {
  return httpAxios.get(`product_detail/${slug}`);
}
function getProductByCategoryId(limit,category_id) {
  return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductByBrandId(limit,category_id) {
  return httpAxios.get(`product_home/${limit}/${category_id}`);
}
const productservice = {
  getProductBySlug: getProductBySlug,
  getProductAll: getProductAll,
  getProductHome: getProductHome,
  getProductByCategoryId:getProductByCategoryId,
  getProductByBrandId:getProductByBrandId,
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  remove: remove,
};
export default productservice;
