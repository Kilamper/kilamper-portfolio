"use client";

import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/app/actions";
import { IconMail, IconX } from "@tabler/icons-react";
import { useActionState, useEffect, useRef } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
            {pending ? (
                <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                </>
            ) : (
                <>
                    <IconMail className="w-5 h-5" />
                    Enviar Mensaje
                </>
            )}
        </button>
    );
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [state, formAction] = useActionState(sendContactEmail, null);
    const formRef = useRef<HTMLFormElement>(null);

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

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <h2 className="text-2xl font-bold text-foreground">Contáctame</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                        aria-label="Cerrar modal"
                    >
                        <IconX className="w-5 h-5" />
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
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            minLength={2}
                            maxLength={100}
                            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="Tu nombre"
                        />
                    </div>

                    {/* Email field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            maxLength={100}
                            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="tu@email.com"
                        />
                    </div>

                    {/* Message field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            minLength={10}
                            maxLength={1000}
                            rows={5}
                            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                            placeholder="Escribe tu mensaje aquí..."
                        />
                    </div>

                    {/* Status message */}
                    {state?.message && (
                        <div
                            className={`p-4 rounded-lg ${state.success
                                ? "bg-green-500/10 text-green-600 border border-green-500/20"
                                : "bg-red-500/10 text-red-600 border border-red-500/20"
                                }`}
                        >
                            {state.message}
                        </div>
                    )}

                    {/* Submit button */}
                    <SubmitButton />
                </form>
            </div>
        </div>
    );
};
