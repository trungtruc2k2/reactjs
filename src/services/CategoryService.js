import httpAxios from "../httpAxios";

function getAll() {
  return httpAxios.get("/category/index");
}
function getById(id) {
  return httpAxios.get(`/category/show/${id}`);
}
function create(category) {
  return httpAxios.post("/category/store", category);
}
function update(category,id)
{
    return httpAxios.post(`/category/update/${id}`,category);
}
function remove(id) {
  return httpAxios.delete(`/category/destroy/${id}`);
}
// frontend
function getCategoryByParentId(parent_id) {
  return httpAxios.get(`category_list/${parent_id}`);
}
function getBySlug(slug) {
  return httpAxios.get(`category/show/${slug}`);
}
const categoryservice = {
  getCategoryByParentId: getCategoryByParentId,
  getBySlug:getBySlug,
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  remove: remove,
};
export default categoryservice;
