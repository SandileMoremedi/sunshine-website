export default function handler(res, req) {
  if (res.method === "POST") {
    req.status(200).json({ message: res.body });
  }
}
