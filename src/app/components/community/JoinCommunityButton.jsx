"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, Check } from "lucide-react";
import { useUser } from "@/features/user/UserContext";
import { supabase } from "@/lib/supabase";

const DISCORD_INVITE = "https://discord.gg/PqnazRxPc";

export default function JoinCommunityButton() {
  const { user } = useUser();
  const [joined, setJoined] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user?.id) return;
    supabase
      .from("user_profiles")
      .select("joined_community")
      .eq("id", user.id)
      .single()
      .then(({ data }) => {
        if (data?.joined_community) setJoined(true);
      })
      .catch(() => {});
  }, [user?.id]);

  const handleClick = async () => {
    if (user?.id && !joined) {
      await supabase
        .from("user_profiles")
        .upsert({ id: user.id, joined_community: true }, { onConflict: "id" })
        .catch(() => {});
      setJoined(true);
    }
    window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`btn-base gap-2 bg-[var(--udemy-purple)] text-white hover:bg-[var(--udemy-purple-dark)] ${
        joined ? "opacity-90" : ""
      }`}
      initial={mounted ? undefined : { scale: 1 }}
      animate={
        mounted && !joined
          ? {
              scale: [1, 1.05, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              },
            }
          : { scale: 1 }
      }
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {joined ? <Check size={18} /> : <UserPlus size={18} />}
      {joined ? "Community Joined" : "Join Community"}
    </motion.button>
  );
}
