"use client";

import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/app/actions";
import { IconMail, IconX } from "@tabler/icons-react";
import { useActionState, useEffect, useRef } from "react";
import { useLanguage } from "./language-context";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function SubmitButton() {
    const { pending } = useFormStatus();
    const { t } = useLanguage();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-primary-darker text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
            {pending ? (
                <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t("contact.sending")}
                </>
            ) : (
                <>
                    <IconMail className="w-5 h-5" />
                    {t("contact.send")}
                </>
            )}
        </button>
    );
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [state, formAction] = useActionState(sendContactEmail, null);
    const formRef = useRef<HTMLFormElement>(null);
    const { t } = useLanguage();

    // Close modal on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Reset form on success
    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset();
            setTimeout(() => {
                onClose();
            }, 2000);
        }
    }, [state?.success, onClose]);

    if (!isOpen) return null;

    const getStatusTranslationKey = (message: string) => {
        if (!message) return "";
        if (message.includes("completa todos los campos")) return "contact.error.fields";
        if (message.includes("email válido")) return "contact.error.email";
        if (message.includes("al menos 2 caracteres")) return "contact.error.nameLength";
        if (message.includes("al menos 10 caracteres")) return "contact.error.messageLength";
        if (message.includes("Error al enviar") || message.includes("intenta de nuevo")) return "contact.error.send";
        if (message.includes("enviado con éxito")) return "contact.success";
        if (message.includes("Error inesperado")) return "contact.error.unexpected";
        return "";
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/10">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <IconMail className="w-6 h-6 text-primary" />
                        {t("contact.title")}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-110 cursor-pointer"
                        aria-label="Cerrar modal"
                    >
                        <IconX className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </button>
                </div>

                {/* Form */}
                <form ref={formRef} action={formAction} className="p-6 space-y-4">
                    {/* Honeypot field - hidden from users */}
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{
                            position: "absolute",
                            left: "-9999px",
                            width: "1px",
                            height: "1px",
                        }}
                        aria-hidden="true"
                    />

                    {/* Name field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            {t("contact.name")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            minLength={2}
                            maxLength={100}
                            className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/40 text-foreground"
                            placeholder={t("contact.placeholder.name")}
                        />
                    </div>

                    {/* Email field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            {t("contact.email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            maxLength={100}
                            className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/40 text-foreground"
                            placeholder={t("contact.placeholder.email")}
                        />
                    </div>

                    {/* Message field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            {t("contact.message")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            minLength={10}
                            maxLength={1000}
                            rows={5}
                            className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none hover:border-primary/40 text-foreground"
                            placeholder={t("contact.placeholder.message")}
                        />
                    </div>

                    {/* Status message */}
                    {state?.message && (
                        <div
                            className={`p-4 rounded-lg animate-in slide-in-from-top-2 duration-300 ${state.success
                                ? "bg-green-500/10 text-green-600 border border-green-500/30 shadow-lg shadow-green-500/10"
                                : "bg-red-500/10 text-red-600 border border-red-500/30 shadow-lg shadow-red-500/10"
                                }`}
                        >
                            {getStatusTranslationKey(state.message) ? t(getStatusTranslationKey(state.message)) : state.message}
                        </div>
                    )}

                    {/* Submit button */}
                    <SubmitButton />
                </form>
            </div>
        </div>
    );
};
