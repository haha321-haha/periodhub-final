#!/bin/bash

echo "🔍 检查域名配置状态..."
echo "================================"

echo "📋 1. 检查当前Nameservers:"
dig NS periodhub.health +short

echo ""
echo "📋 2. 检查A记录:"
dig A periodhub.health +short

echo ""
echo "📋 3. 检查CNAME记录 (www):"
dig CNAME www.periodhub.health +short

echo ""
echo "📋 4. Vercel域名状态:"
npx vercel domains inspect periodhub.health

echo ""
echo "🎯 期望的Nameservers应该是:"
echo "ns1.vercel-dns.com"
echo "ns2.vercel-dns.com"

echo ""
echo "✅ 如果看到上述Nameservers，说明配置成功！"
echo "⏳ 如果还是显示Cloudflare的NS，请等待DNS传播..."
