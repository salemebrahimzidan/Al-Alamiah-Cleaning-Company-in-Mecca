/** رقم الشركة (بدون +) — يُستخدم لـ wa.me و tel: */
export const COMPANY_PHONE_DIGITS = '966548607610'

const WA_PREFILL_AR =
  'مرحباً، أرغب بحجز تنظيف في مكة المكرمة.\nالحي: \nنوع الخدمة: \nالتاريخ المناسب: '

const WA_PREFILL_EN =
  'Hello, I would like to book cleaning in Mecca.\nArea: \nService: \nPreferred date: '

export function whatsappHref(prefill?: string): string {
  const base = `https://wa.me/${COMPANY_PHONE_DIGITS}`
  if (!prefill) return base
  return `${base}?text=${encodeURIComponent(prefill)}`
}

/** روابط واتساب مع رسالة جاهزة لزيادة التحويل */
export const WHATSAPP_HREF_AR = whatsappHref(WA_PREFILL_AR)
export const WHATSAPP_HREF_EN = whatsappHref(WA_PREFILL_EN)

/** بدون نص مسبق (للتوافق مع الروابط القديمة) */
export const WHATSAPP_HREF = `https://wa.me/${COMPANY_PHONE_DIGITS}`

export const PHONE_TEL_HREF = `tel:+${COMPANY_PHONE_DIGITS}`

/** غيّر هذا إلى بريدكم الفعلي */
export const COMPANY_EMAIL = 'info@alamiya-cleaning.com'
