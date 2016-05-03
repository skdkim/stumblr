json.extract! post, :post_type, :title, :body, :content_url, :author_id, :id, :author


json.notes do
  json.array! post.notes
end
json.tags do
  json.array! post.tags
end
