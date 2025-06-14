#!/bin/bash

echo "🔄 开始监控DNS传播状态..."
echo "================================"
echo "⏰ 每5分钟检查一次，按 Ctrl+C 停止监控"
echo ""

check_count=0

while true; do
    check_count=$((check_count + 1))
    echo "📋 第 $check_count 次检查 - $(date)"
    echo "--------------------------------"
    
    # 检查Nameservers
    echo "🔍 当前Nameservers:"
    current_ns=$(dig NS periodhub.health +short)
    echo "$current_ns"
    
    # 检查是否包含Vercel的NS
    if echo "$current_ns" | grep -q "vercel-dns.com"; then
        echo ""
        echo "🎉 成功！检测到Vercel Nameservers！"
        echo "✅ DNS传播已完成！"
        echo ""
        echo "🌐 现在检查网站访问："
        echo "   主域名: https://periodhub.health"
        echo "   www域名: https://www.periodhub.health"
        echo ""
        echo "🔍 最终验证："
        npx vercel domains inspect periodhub.health
        break
    else
        echo "⏳ 仍在使用旧的Nameservers，继续等待..."
        echo "💡 预期看到: ns1.vercel-dns.com 和 ns2.vercel-dns.com"
    fi
    
    echo ""
    echo "⏰ 等待5分钟后再次检查..."
    echo "================================"
    sleep 300  # 等待5分钟
done

echo ""
echo "🎊 恭喜！域名配置完成！"
echo "🌐 您的网站现在可以通过 https://periodhub.health 访问了！"
