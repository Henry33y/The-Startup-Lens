"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async () => {
    // Demo subscription trigger
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubscribed(true);
    reset();
  };

  return (
    <section className="pt-36 sm:pt-48 lg:pt-56 pb-24 sm:pb-32 bg-tsl-black border-y border-tsl-dark-grey/40 relative">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-tsl-surface p-8 sm:p-14 border border-tsl-dark-grey">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-black border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>JOIN OUR WEEKLY NEWSLETTER</span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white">
              DON&apos;T MISS THE SIGNAL.
            </h2>
            <p className="text-tsl-grey text-base sm:text-lg font-sans">
              Stories, builders, and early-stage startups worth watching delivered directly to your inbox every Thursday.
            </p>
          </div>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-tsl-blue/10 border border-tsl-blue text-tsl-blue flex items-center justify-center space-x-3"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-mono text-sm font-semibold uppercase tracking-wider">
                YOU&apos;RE ON THE LENS SIGNAL LIST. WELCOME.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                <div className="relative flex-1">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email address..."
                    className="w-full px-5 py-4 bg-tsl-black border border-tsl-dark-grey text-tsl-white text-sm font-sans placeholder:text-tsl-grey focus:outline-none focus:border-tsl-blue transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-tsl-white text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-blue transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {errors.email && (
                <p className="text-xs font-mono text-red-400 text-left pl-1">
                  {errors.email.message}
                </p>
              )}
              <p className="text-[11px] font-mono text-tsl-grey">
                NO SPAM. UNSUBSCRIBE ANYTIME.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
